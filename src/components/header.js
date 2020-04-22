import styled from "styled-components"
import React from "react"

import NavBar from "./UI/NavBar/NavBar.js"
import Hamburger from "./UI/HamburgerMenu/NavMenu"
import Logo from "./UI/Logo/Logo"

import { colors } from "../themes/theme"

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  background-color: ${colors.offwhite};
  color: ${colors.skyblue};
  max-height: 10vh;
  max-width: 85%;
  margin: auto;
  overflow: hidden;
`

const Mobile = () => <Hamburger />

const Desktop = () => (
  <>
    <StyledHeader>
      <Logo />
      <NavBar />
    </StyledHeader>
  </>
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
