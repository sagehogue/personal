import React from "react"

import styled from "styled-components"
import { colors } from "../../../../themes/theme"

const Hamburger = styled.div`
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  max-height: 10vh;
  max-width: 25vw;
  margin: auto 0.5rem;
  & div {
    max-width: 20vw;
    text-align: center;
    display: inline-block;
    background-color: ${props =>
      props.menuClosed ? colors.brightblue : "red"};
    transition: all 0.4s;
    width: 4rem;
    height: 1rem;
    border-radius: 8px;
    margin: 0.35rem;
  }
  & .top {
    transform-origin: 0% 100%;
    transform: rotate(${props => (props.menuClosed ? 0 : "45deg")});
  }
  & .middle {
    transition: all 0.2s;
    transform: translateX(${props => (props.menuClosed ? 0 : "10rem")});
  }
  & .bottom {
    transform-origin: 0% 100%;
    transform: translate(${props => (props.menuClosed ? 0 : " .4rem,0")})
      rotate(${props => (props.menuClosed ? 0 : "-45deg")});
  }
`

const NavButton = ({ menuClosed, toggleMenuHandler }) => {
  const hamburger = (
    <Hamburger menuClosed={menuClosed} onClick={toggleMenuHandler}>
      <div className={"top"}></div>
      <div className={"middle"}></div>
      <div className={"bottom"}></div>
    </Hamburger>
  )

  return hamburger
}

export default NavButton
