import styled from "styled-components"
import React from "react"

import NavBar from "./UI/NavBar/NavBar.js"
import Hamburger from "./UI/HamburgerMenu/NavMenu"

const StyledHeader = styled.header`
  background-color: white;
  margin-bottom: 3rem;
  padding-top: 2vh;
  padding-bottom: 2vh;
`

const Mobile = () => <Hamburger />

const Desktop = () => (
  <StyledHeader>
    <NavBar />
  </StyledHeader>
)

const Header = () => (window.innerWidth < 800 ? <Mobile /> : <Desktop />)

export default Header
