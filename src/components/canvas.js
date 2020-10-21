import React, { Component } from 'react'

export default class canvas extends Component {
    constructor(props){
        super(props)
        this.canvas=React.createRef();
    }

    canvasStyle = {
        marginLeft:'100px',
        marginTop:'100px'
    }
    componentDidMount(){
        this.produceImage()
    }
    produceImage = () => {
        const ctx = this.canvas.current.getContext('2d')

        const image = ctx.createImageData(256,128)

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
        ctx.putImageData(image,0,0)
    }
    render() {
        return (
            <div>
                <canvas
                 style={this.canvasStyle}
                 ref={this.canvas}
                 width={300}
                 height={300}
                />
            </div>
        )
    }
}

