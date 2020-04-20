import React, { Component } from "react"

class FractalTree extends Component {
  componentDidMount() {
    //   Initialize canvas
    const canvas = this.refs.canvas
    const c = canvas.getContext("2d")
    // Draw White - Black rectangles
    let loops = 0
    let DrawingRect = true
    while (DrawingRect) {
      for (let i = 0; i < 255; i++) {
        this.placeRectLeftRandomly(c, `rgb(${i}, ${i}, ${i})`)
        this.placeHexagonRightRandomly(c)
      }
      loops += 1
      if (loops > 4) {
        break
      }
    }
    // Python code I'm trying to port over!
    // def Draw_Branch(length):
    //     if (length < Min_Fractal_Resolution):
    //         return
    //     else:
    //         t.color(r.random(), r.random(), r.random())
    //         t.fd(length)
    //         t.lt(30)
    //         Draw_Branch(3 * length / 4)
    //         t.rt(60)
    //         Draw_Branch(3 * length / 4)
    //         t.lt(30)
    //         t.backward(length)
  }
  //   }

  DrawBranch(canvas, length) {
    if (length < this.meta.MinFractalResolution) {
      return
    } else {
      canvas.strokeStyle = this.randomColor()
    }
  }

  randomColor() {
    return (
      "#" +
      (function co(lor) {
        return (lor += [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
        ][Math.floor(Math.random() * 16)]) && lor.length == 6
          ? lor
          : co(lor)
      })("")
    )
  }

  getRandomCoordinates() {
    return [Math.random * this.meta.width, Math.Random * this.meta.height]
  }
  placeRectLeftRandomly(canvasContext, color = false) {
    canvasContext.beginPath()
    const x = (Math.random() * this.meta.width) / 2
    const y = Math.random() * this.meta.height
    const SizeX = Math.random() * this.meta.RectXMax + 1
    const SizeY = Math.random() * this.meta.RectYMax + 1
    if (color) {
      canvasContext.fillStyle = color
      canvasContext.fillRect(x, y, SizeX, SizeY)
    } else {
      canvasContext.fillStyle = this.randomColor()
      canvasContext.fillRect(x, y, SizeX, SizeY)
    }
    canvasContext.fill()
  }

  placeHexagonRightRandomly(canvas, color = false) {
    const x = (Math.random() * this.meta.width) / 2 + this.meta.width / 2
    const y = Math.random() * this.meta.height
    const size = 1 + Math.random() * this.meta.HexagonSize
    canvas.beginPath()
    canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0))

    for (let side = 0; side < 7; side++) {
      canvas.lineTo(
        x + size * Math.cos((side * 2 * Math.PI) / 6),
        y + size * Math.sin((side * 2 * Math.PI) / 6)
      )
    }

    if (color) {
      canvas.fillStyle = color
    } else {
      canvas.fillStyle = this.randomColor()
    }
    canvas.fill()
  }
  meta = {
    width: 500,
    height: 500,
    RectXMax: 50,
    RectYMax: 50,
    HexagonSize: 50,
    MinFractalResolution: 3,
  }
  render() {
    return (
      <canvas
        ref={"canvas"}
        width={this.meta.width}
        height={this.meta.height}
        className="mandelbrot"
      ></canvas>
    )
  }
}

export default FractalTree
