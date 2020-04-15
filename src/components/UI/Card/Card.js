import React, { useState } from "react"
import styled from "styled-components"

import { colors } from "../../../themes/theme"

import VisibleBR from "../VisibleBR/VisibleBR"

const StyledCard = styled.div`
  font-size: 1.5rem;
  text-align: center;
  min-height: 30rem;
  border-radius: 0.8rem;

  background-color: ${colors.offwhite};
  width: 21.5vw;
  svg {
    font-size: 4rem;
  }

  br {
    max-width: 85%;
    margin: auto;
  }
  & div,
  & svg,
  & p {
    margin-top: 1rem;
  }
  & p,
  ul {
    margin: 1rem auto;
    width: 85%;
    line-height: 2.5rem;
  }
  & h3 {
    font-size: 2rem;
    margin: 1rem 0;
  }
  & h4 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0;
  }
  ul {
    font-size: 1.25rem;
    padding-bottom: 1.5rem;
  }
`

const Card = props => {
  return (
    <StyledCard>
      {props.icon}
      <h3>{props.title}</h3>
      <VisibleBR />
      <p>{props.description}</p>
      <br />
      {props.children}
    </StyledCard>
  )
}

const NewCard = props => {
  const [flip, setFlip] = useState(false)
  return <div
    className={`card ${flip ? 'flip' : ''}`}
    onClick={() => {
      setFlip(!flip)
    }}>
    <div className="front">
      {props.icon}
      <h3>{props.title}</h3>
      <div className="front-desc">
        {props.options.map(option => {
          return <div className="props-option">{option}</div>
        })}
      </div>
    </div>
    <div className="back">{props.answer}</div>
  </div>
}

export default NewCard
