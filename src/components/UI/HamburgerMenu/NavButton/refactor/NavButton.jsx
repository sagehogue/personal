import React from "react"
import classes from "./NavButton.module.css"

import styled from "styled-components"
import { colors } from "../../../../themes/theme"

const Hamburger = styled.div`
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  max-width: 25vw;
  & div {
    background-color: ${colors.brightblue};
    transition: all 0.4s;
    width: 4rem;
    height: 0.8rem;
    margin: 0.5rem 1.5rem 0.5rem 0;
    border-radius: 8px;
    transition: all 0.2s;
  }
  & .middle {
  }
`

const XButton = styled.div`
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  max-width: 25vw;
  & div {
    border-radius: 8px;
    background-color: red;
    transition: all 0.5s;
    width: 5rem;
    height: 0.8rem;
    margin: 0.5rem 1.5rem 0.5rem 0;
  }
  & .top {
    margin-top: 1.5rem;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
  }
  & .middle {
    transform: translateX(10rem);
  }
  & .bottom {
    transform: rotate(-45deg);
    transform-origin: 0% 100%;
  }
`
