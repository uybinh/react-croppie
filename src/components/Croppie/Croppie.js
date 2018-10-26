import React, { Component } from "react"
import { Croppie } from "croppie"
import "croppie/croppie.css"
import Aux from "../../hoc/Aux"

const DEFAULT_OPTS = {
  boundary: { width: 300, height: 300 },
  showZoomer: true,
  enableOrientation: true,
  mouseWheelZoom: "ctrl"
}

class CroppieComp extends Component {
  state = {
    result: null,
    type: "square"
  }

  createCroppieInstance() {
    const viewport = {
      viewport: { width: 200, height: 200, type: this.state.type }
    }
    const opts = Object.assign({}, DEFAULT_OPTS, viewport, this.props.opts)
    this.croppie = new Croppie(this.croppieCont, opts)
    this.croppie.bind({
      url: this.props.imgUrl
    })
  }

  componentDidMount() {
    this.createCroppieInstance()
  }

  componentDidUpdate() {
    this.croppie.destroy()
    this.createCroppieInstance()
  }

  crop = () => {
    const opt = {
      type: "base64",
      format: "png",
      quality: 1
    }
    this.croppie.result(opt).then(imgCode => {
      this.setState({ result: imgCode })
    })
  }

  clear = () => {
    this.setState({
      result: null
    })
  }

  optionSelectHandler = e => {
    this.setState({ type: e.target.value })
  }

  render() {
    return (
      <Aux>
        <label>
          Circle
          <input
            name="type"
            type="radio"
            value="circle"
            onChange={this.optionSelectHandler}
            checked={this.state.type === "circle"}
          />
        </label>
        <label>
          Square
          <input
            name="type"
            type="radio"
            value="square"
            onChange={this.optionSelectHandler}
            checked={this.state.type === "square"}
          />
        </label>
        <button onClick={this.crop}>Show result</button>
        <div id="demo" ref={el => (this.croppieCont = el)} />
        {this.state.result && <img src={this.state.result} alt="result" />}
      </Aux>
    )
  }
}

export default CroppieComp
