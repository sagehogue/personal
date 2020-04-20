import React, { useState } from "react"

import styled from "styled-components"

import { colors } from "../../../../../themes/theme"

import VisibleBR from "../../../../UI/VisibleBR/VisibleBR"

const CardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  background-color: ${props => (props.color ? props.color : colors.offwhite)};
  transform-style: preserve-3d;
  height: 10rem;
  transform: perspective(1000px) translateY(var(--translate-y, 0))
    rotateY(var(--rotate-y, 0));
  transition: 350ms all;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1.5rem;
  text-align: center;
  min-height: 20vh;
  border-radius: 0.8rem;
  width: 15vw;
  &.flip {
    --rotate-y: 180deg;
  }
  &:hover {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.6);
    --translate-y: -2px;
  }
  & .front,
  & .back {
    position: absolute;
    padding: 1rem;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .front span, .back span {
      color: ${props => (props.titleColor ? props.titleColor : colors.offwhite)}
  }

  & .front h3,
  & .back h4 {
    margin-top: 1.25rem;
  }
  & .front h3 {
    font-size: 1.5rem;
  }
  br {
    margin: 0 auto;
    max-width: 75%;
  }
  & .back {
    transform: rotateY(180deg);
  .constrain {
    max-width: 90%;
    margin: 0 auto;
  }
`

export default function Card(props) {
  const [flip, setFlip] = useState(false)
  return (
    <div ref={props.cardRef ? props.cardRef : null}>
      <CardStyle
        titleColor={props.titleColor ? props.titleColor : false}
        className={`card ${flip ? "flip" : ""}`}
        onClick={() => {
          setFlip(!flip)
        }}
      >
        <div className="front">
          {props.frontCenter}
          <VisibleBR />
          <div className="constrain">
            <h3 className="frontCenterLabel">{props.frontCenterLabel}</h3>
          </div>
        </div>
        <div className="back">
          <div className={"back-wrapper"}>
            {props.backCenter}
            <VisibleBR />
            <div className="constrain">
              <h3 className="backCenterLabel">{props.backCenterLabel}</h3>
            </div>
          </div>
        </div>
      </CardStyle>
    </div>
  )
}
