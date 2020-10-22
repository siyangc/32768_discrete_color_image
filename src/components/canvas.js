import React, { Component } from 'react'
import {repeatImg} from '../imagePatterns/repeatPattern'
import {coverageImg} from '../imagePatterns/coverage'
import {randomImg} from '../imagePatterns/randomPixel'
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
        this.genCoverageImg()
    }

    //basic simple pattern
    genRepeatImg = () => {
        const ctx = this.canvas.current.getContext('2d')
        const image = ctx.createImageData(256,128)
        ctx.putImageData(repeatImg(image),0,0)        
    }
    //pixels has been shuffled and randomly distributed 
    genRandomImg= () => {
        const ctx = this.canvas.current.getContext('2d')
        const image = ctx.createImageData(256,128)
        ctx.putImageData(randomImg(image),0,0)
    }
    //find the most similiar pixel from each line 
    genCoverageImg = () => {
        const ctx = this.canvas.current.getContext('2d')
        const image = ctx.createImageData(256,128)
        ctx.putImageData(coverageImg(image),0,0)
    }

    render() {
        return (
            <div style={this.canvasStyle}>
                <canvas
                 
                 ref={this.canvas}
                 width={256}
                 height={128}
                />

                <br />

                <button onClick={()=>{this.genRepeatImg()}}>Repeat-Pattern</button>
                <button onClick={()=>{this.genRandomImg()}}>Random-Pixels</button>
                <button onClick={()=>{this.genCoverageImg()}}>Coverage</button>
            </div>
        )
    }
}

