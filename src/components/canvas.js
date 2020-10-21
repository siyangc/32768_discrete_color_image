import React, { Component } from 'react'
import {simpleImage} from '../imagePatterns/simpleImage'
import {imageOne} from '../imagePatterns/ImageOne'
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

        //ctx.putImageData(simpleImage(image),0,0)
        ctx.putImageData(imageOne(image),0,0)
    }

    render() {
        return (
            <div>
                <canvas
                 style={this.canvasStyle}
                 ref={this.canvas}
                 width={256}
                 height={128}
                />
            </div>
        )
    }
}

