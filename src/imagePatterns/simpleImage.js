export const simpleImage = (image) => {
    let d = 0
    for(let i=8;i<257;i+=8){
        for(let j=8;j<257;j+=8){
            for(let k=8;k<257;k+=8){
                image.data[d+0] = i
                image.data[d+1] = j
                image.data[d+2] = k
                image.data[d+3] = 255
                d+=4
            }
        }
    }
    return image
}