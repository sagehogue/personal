import React, { useState } from "react"

import styled from "styled-components"

import { colors } from "../../../themes/theme"

import VisibleBR from "../VisibleBR/VisibleBR"

const CardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  background-color: white;
  transform-style: preserve-3d;
  height: 10rem;
  transform: perspective(1000px) translateY(var(--translate-y, 0))
    rotateY(var(--rotate-y, 0));
  transition: 350ms all;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1.5rem;
  text-align: center;
  min-height: 30rem;
  border-radius: 0.8rem;
  background-color: ${colors.offwhite};
  width: 21.5vw;
  svg {
    font-size: 4rem;
    color: ${colors.lilac};
  }
  & h3,
  & p {
    color: ${colors.darkText};
  }
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
  }
  & .front svg {
    margin-top: 1.75rem;
  }
  & .front h3,
  & .back h4 {
    margin-top: 1.25rem;
  }
  & .front h3 {
    font-size: 1.5rem;
  }
  br {
    margin: 0.5rem auto 1rem auto;
    max-width: 75%;
  }
  & .back {
    transform: rotateY(180deg);
  }
  & .back ul {
    padding-left: 0;
    list-style: none;
  }
  & .back-wrapper {
    margin-top: 7.5rem;
  }
  .constrain {
    max-width: 90%;
    margin: 0 auto;
  }
`
const Card = props => {
  const [flip, setFlip] = useState(false)
  return (
    <CardStyle
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => {
        setFlip(!flip)
      }}
    >
      <div className="front">
        {props.icon}
        <div className="constrain">
          <h3>{props.title}</h3>
        </div>
        <VisibleBR />
        <div className="constrain">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="back">
        <div className={"back-wrapper"}>
          <div className="constrain">
            <h4>{props.listTitle}</h4>
          </div>
          <VisibleBR />
          <div className="constrain">
            <ul>
              {props.listItems
                ? props.listItems.map((option, i) => {
                    return (
                      <li key={i} className="card-item">
                        {option}
                      </li>
                    )
                  })
                : null}
            </ul>
          </div>
        </div>
      </div>
    </CardStyle>
  )
}
export default Card
