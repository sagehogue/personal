import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { colors } from "../../../themes/theme"

import Logo from "../Logo/Logo"

import { FaWrench } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaHome } from "react-icons/fa"
import { FaPalette } from "react-icons/fa"

const Navigation = styled.nav`
  box-sizing: content-box;
  width: 91vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  background-color: ${colors.offwhite};
  & a {
    height: 50%;
    margin: auto 0;
  }
`
const StyledLink = styled(props => (
  <Link activeClassName={activeClass} {...props} />
))`
  transition: all 0.2s;
  color: ${colors.deepblue};
  font-size: 2rem;
  text-decoration: none;
  border-right: 2px solid;
  padding: 0 1.5rem;
  border-image: linear-gradient(
      to bottom,
      rgba(13, 135, 74, 1),
      rgba(0, 0, 0, 0)
    )
    1 100%;
  :hover {
    color: gold;
  }
  &:last-of-type {
    padding-right: 0;
    border-right: none;
  }
  &.${activeClass} {
    color: orange;
  }
`
const activeClass = "active"

const NavBar = function() {
  return (
    <Navigation>
      <StyledLink to="/">
        <FaHome />
      </StyledLink>
      <StyledLink to="/projects">
        <FaWrench />
      </StyledLink>
      <StyledLink to="/contact">
        <FaEnvelope />
      </StyledLink>
      <StyledLink to="/canvas">
        <FaPalette />
      </StyledLink>
    </Navigation>
  )
}

export default NavBar
