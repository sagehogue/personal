import React from "react"
import styled from "styled-components"
import { fonts, colors } from "../../../themes/theme"

const StyledLogo = styled.span`
  font-family: ${fonts.logoFont2};
  font-size: 3.25rem;
  vertical-align: middle;
  width: 100%;
  align-self: center;
  @media screen and (max-width: 400px) {
    font-size: 2.75rem;
  }
`

const Logo = () => {
  return <StyledLogo>webSage</StyledLogo>
}

export default Logo
