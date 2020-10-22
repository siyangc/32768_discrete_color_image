export const repeatImg = (image) =>{
    let d = 0
    for(let hx=1;hx<33;hx++){
        for(let hz=1;hz<5;hz++){
            for(let wy=1;wy<33;wy++){
                for(let wz=1;wz<9;wz++){
                    image.data[d+0] = hx * 8
                    image.data[d+1] = wy * 8
                    image.data[d+2] = hz * wz * 8 
                    image.data[d+3] = 255
                    d += 4
                }
            }
        }
    }

    return image
}