import React from "react"
import { Link } from "gatsby"
import classes from "./TrayItem.module.css"

import styled from "styled-components"
import { colors } from "../../../../../themes/theme"

const itemFontSize = "2.5rem"
const itemFontWeight = "700"

const Item = styled.li`
  color: ${colors.brightblue};
  font-size: ${itemFontSize};
  font-weight: ${itemFontWeight};
  transition: all 0.4s;
  text-decoration: none;
  flex-shrink: 1;
  vertical-align: middle;
  border-radius: 1rem;
  height: 50%;
  margin: auto;
`

const trayItem = props => {
  return <Item onClick={props.clickHandler}>{props.children}</Item>
}

export default trayItem
