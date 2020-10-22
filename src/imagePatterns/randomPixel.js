export const randomImg = (image) => {
    //2d array: colorPos[row][column][red][green][blue]
    const colorPos = []
    for(let y=0;y<128;y++){
        let row = []
        for(let x=0;x<256;x++){
            row.push([x%32+1,y%32+1,Math.floor(x/32)+Math.floor(y/32)*8+1])
        }
        colorPos.push(row)
    }

    //shuffle the color array
    for(let i=32767;i>-1;i--){
        //pick the last position and randomly select a position before         
        let randomNum = Math.floor(Math.random() * i)
        let y = Math.floor(i/256)
        let x = i%256
        let ry = Math.floor(randomNum/256)
        let rx = randomNum%256
        //switch two points
        let temp = colorPos[y][x]
        colorPos[y][x] = colorPos[ry][rx]
        colorPos[ry][rx] = temp
        //put the randomly selected point into the canvas
        image.data[4*i+0] = colorPos[y][x][0] * 8
        image.data[4*i+1] = colorPos[y][x][1] * 8
        image.data[4*i+2] = colorPos[y][x][2] * 8
        image.data[4*i+3] = 255
    }

    return image
}