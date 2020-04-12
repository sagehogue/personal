import React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
  font-size: 2rem;
  text-align: center;
  min-height: 20rem;
  & div {
  }
`

const Card = props => {
  return (
    <StyledCard>
      {props.icon}
      <br />
      {props.title}
      <br />
      {props.description}
      <br />
      {props.children}
    </StyledCard>
  )
}

export default Card
