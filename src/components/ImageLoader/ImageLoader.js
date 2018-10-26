import React from "react"
import classes from "./ImageLoader.module.css"

const imageLoader = props => (
  <div className={classes.ImageLoader}>
    <input id="fileinput" type="file" onChange={props.onchange} />
    <label htmlFor="fileinput">Upload an image</label>
  </div>
)

export default imageLoader
