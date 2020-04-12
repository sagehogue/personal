import React from "react"
import { Link } from "gatsby"
import classes from "./TrayItem.module.css"

import styled from "styled-components"

const trayItem = props => {
  return (
    <div onClick={props.clickHandler} className={classes.TrayItem}>
      {props.children}
    </div>
  )
}

export default trayItem
