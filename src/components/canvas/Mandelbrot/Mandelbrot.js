import React, { Component } from "react"

// Challenge: Figure out how to create a "zoom in" functionality that redraws the fractal at the selected point and displays it.

class Mandelbrot extends Component {
  componentDidMount() {
    const canvas = this.refs.mandelbrot
    const c = canvas.getContext("2d")
    this.canvasWidth = canvas.width
    this.canvasHeight = canvas.height
    this.canvasData = c.getImageData(0, 0, this.canvasWidth, this.canvasHeight)
    let width = 3.5
    let height = 2
    let xoffset = 0
    let yoffset = 0
    for (let px = 0; px < this.canvasWidth; px++) {
      for (let py = 0; py < this.canvasHeight; py++) {
        const x0 = (px / this.canvasWidth) * width + (xoffset - 2.5)
        const y0 = (py / this.canvasHeight) * height + (yoffset - 1)
        let x = 0
        let y = 0
        let iter = 0
        const max_iter = 128

        while (x * x + y * y < 4 && iter < max_iter) {
          var x_temp = x * x - y * y + x0
          y = 2 * x * y + y0
          x = x_temp
          iter++
        }

        const rgb = this.hToRgb(iter / max_iter)
        this.drawPixel(px, py, rgb[0], rgb[1], rgb[2], 255)
      }
    }
    c.putImageData(this.canvasData, 0, 0)
  }

  // Draw single pixel to the imageData //
  drawPixel = (x, y, r, g, b, a) => {
    var index = (x + y * this.canvasWidth) * 4

    this.canvasData.data[index + 0] = r
    this.canvasData.data[index + 1] = g
    this.canvasData.data[index + 2] = b
    this.canvasData.data[index + 3] = a
  }

  //Convert hue value to rgb
  hToRgb = h => {
    if (h == 1) return [0, 0, 0]
    let r, g, b
    let i = Math.floor(h * 6)
    let f = h * 6 - i
    switch (i % 6) {
      case 0:
        r = 1
        g = f
        b = 0
        break
      case 1:
        r = f
        g = 1
        b = 0
        break
      case 2:
        r = 0
        g = 1
        b = f
        break
      case 3:
        r = 0
        g = f
        b = 1
        break
      case 4:
        r = f
        g = 0
        b = 1
        break
      case 5:
        r = 1
        g = 0
        b = f
        break
    }
    return [r * 255, g * 255, b * 255]
  }
  meta = {
    width: 500,
    height: 500,
  }

  render() {
    return (
      <canvas
        ref={"mandelbrot"}
        width={this.meta.width}
        height={this.meta.height}
        className="fractaltree"
      ></canvas>
    )
  }
}

export default Mandelbrot
