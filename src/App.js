import React, { Component } from "react"
import Croppie from "./components/Croppie/Croppie"
import ImageLoader from "./components/ImageLoader/ImageLoader"

class App extends Component {
  state = {
    file: null
  }

  fileHandler = e => {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    })
  }

  render() {
    return (
      <div className="App">
        <ImageLoader onchange={this.fileHandler} />
        {this.state.file && <Croppie imgUrl={this.state.file} />}
      </div>
    )
  }
}

export default App
