const distance = (r1,g1,b1,r2,g2,b2)=>{
    let r = r1-r2
    let g = g1-g2
    let b = b1-b2
    return Math.pow(r,2)+ Math.pow(g,2) + Math.pow(b,2)
}

//2d array: colorPos[row][column][red][green][blue]
const colorPos = []
for(let y=0;y<128;y++){
    let row = []
    for(let x=0;x<256;x++){
        row.push([x%32+1,y%32+1,Math.floor(x/32)+Math.floor(y/32)*8+1])
    }
    colorPos.push(row)
}

//interation
let num = 0
while(num<2){
    //foreach line, from left to right, find the most similiar color and put it into the next
    for(let y=0;y<128;y++){
        for(let x=0;x<254;x++){       
            let minD = 3000
            let minCol = []
            let p = 0
            for(let i=x+1;i<256;i++){
                let d = distance(
                    colorPos[y][x][0],colorPos[y][x][1],colorPos[y][x][2],
                    colorPos[y][i][0],colorPos[y][i][1],colorPos[y][i][2]
                )
                if (d<minD){
                    minD = d
                    minCol = colorPos[y][i]
                    p=i
                }
            }
            if (minD<3000){
                colorPos[y][p] = colorPos[y][x+1]
                colorPos[y][x+1] = minCol
                
            }
        }
    }
    //foreach column, from top to bottom, find the most similiar color and put it into the next
    for(let x=0;x<256;x++){
        for(let y=0;y<126;y++){       
            let minD = 3000
            let minCol = []
            let p = 0
            for(let i=y+1;i<128;i++){
                let d = distance(
                    colorPos[y][x][0],colorPos[y][x][1],colorPos[y][x][2],
                    colorPos[i][x][0],colorPos[i][x][1],colorPos[i][x][2]
                )
                if (d<minD){
                    minD = d
                    minCol = colorPos[i][x]
                    p = i
                }
            }
            if (minD<3000){
                colorPos[p][x] = colorPos[y+1][x]
                colorPos[y+1][x] = minCol
            }
        }
    }
    num += 1
}

export const coverageImg = (image) => {
    let d = 0
    for(let i=0;i<128;i++){
        for(let j=0;j<256;j++){
            image.data[d+0] = colorPos[i][j][0] * 8
            image.data[d+1] = colorPos[i][j][1] * 8
            image.data[d+2] = colorPos[i][j][2] * 8
            image.data[d+3] = 255
            d += 4
        }        
    }
    return image
}