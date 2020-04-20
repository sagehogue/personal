import React, { Component } from "react"

class TriangleFractal extends Component {
  componentDidMount() {
    const canvas = this.refs.trianglefractal
    const c = canvas.getContext("2d")
    this.canvasWidth = canvas.width
    this.canvasHeight = canvas.height
    console.log(`Triangle Fractal reporting for duty. \n${canvas} ${c}`)
    c.beginPath()
    c.fillRect(0, 0, 50, 50)
    // this.canvasData = c.getImageData(0, 0, this.canvasWidth, this.canvasHeight)
    // for (let i = 0; i < 100; i++) {
    //   let y = 400 - 400 / (i / 2)
    //   this.drawLine(c, { x: 0, y }, { x: 400, y })
    // }
  }

  drawLine(ctx, p0, p1, color = "black") {
    console.log(ctx)
    ctx.beginPath()
    ctx.moveTo(p0.x, p0.y)
    ctx.lineTo(p0.x, p1.y)
    ctx.strokeStyle = color
    ctx.stroke()
  }

  meta = {
    width: 500,
    height: 500,
  }

  render() {
    return (
      <canvas
        ref={"trianglefractal"}
        width={this.meta.width}
        height={this.meta.height}
        className="trianglefractal"
      ></canvas>
    )
  }
}

export default TriangleFractal
