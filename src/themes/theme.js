import React from "react"
import styled from "styled-components"

export let colors = {
  offwhite: "#FCFCFC",
  skyblue: "#B2DBFF",
  brightblue: "#47A1EF",
  deepblue: "#0675D6",
  darkblue: "#26547C",
}

const Theme = styled.div`
  margin: 0 auto;
  font-family: Montserrat, arial;
  @media screen and (max-width: 550px) {
    max-width: 95vw;
  }
`
const Background = styled.div`
  background-color: ${props =>
    props.isColored ? colors.deepblue : colors.offwhite};
  width: 100%;
`

const StyledTheme = ({ children, color = false }) => (
  <Background isColored={color}>
    <Theme>{children}</Theme>
  </Background>
)

export default StyledTheme
