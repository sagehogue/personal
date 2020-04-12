import styled from "styled-components"
import React from "react"

import NavBar from "./UI/NavBar/NavBar.js"
import Hamburger from "./UI/HamburgerMenu/NavMenu"

import { colors } from "../themes/theme"

const StyledHeader = styled.header`
  background-color: ${colors.offwhite};
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  color: ${colors.skyblue};
`

const Mobile = () => <Hamburger />

const Desktop = () => (
  <StyledHeader>
    <NavBar />
  </StyledHeader>
)
const Header = () => {
  return typeof window !== "undefined" ? (
    window.innerWidth < 800 ? (
      <Mobile />
    ) : (
      <Desktop />
    )
  ) : null
}

export default Header
