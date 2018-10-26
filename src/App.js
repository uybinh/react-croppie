import React, { Component } from "react"
import Croppie from "./components/Croppie/Croppie"
import image from "./assets/images/img-01.jpg"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Croppie imgUrl={image} />
      </div>
    )
  }
}

export default App
