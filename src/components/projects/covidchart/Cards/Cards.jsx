import React, { useRef } from "react"
import styled from "styled-components"
import useIntersect from "../../../Utility/CustomHooks"

import { colors } from "../../../../themes/theme"

import CountUp from "react-countup"

import Card from "./Card/Card"

const StyledCards = styled.div`
  display: flex;
  justify-content: space-around;
  & > div {
    margin: 2rem 2rem;
  }
`

const StyledHeading = styled.h2`
  margin-top: 2.5rem;
  color: ${colors.darkText};
  font-size: 2rem;
`

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const CountUpRef = useRef(null)
  const [Cardref, ObserverData] = useIntersect({
    threshold: 0,
  })

  if (!confirmed) {
    return `Loading...`
  }

  // I think I need to attach refs to the 3 card counters.
  // Then use a intersection observer to detect when they are on screen
  // and use it to trigger animation through changing state variable

  return (
    <>
      <StyledHeading>
        Global & National stats as of {new Date(lastUpdate).toDateString()}
      </StyledHeading>
      <StyledCards>
        <Card
          cardRef={Cardref}
          frontCenter={
            <CountUp
              delay={0}
              start={0}
              end={confirmed.value}
              isVisible={ObserverData.isIntersecting}
              separator=","
            />
          }
          frontCenterLabel={`Global Infected`}
          titleColor={"green"}
        ></Card>
        <Card
          frontCenter={
            <CountUp
              start={0}
              end={recovered.value}
              isVisible={ObserverData.isIntersecting}
              separator=","
            />
          }
          frontCenterLabel={`Global Recovered`}
          titleColor={"blue"}
        ></Card>
        <Card
          frontCenter={
            <CountUp
              start={0}
              end={deaths.value}
              isVisible={ObserverData.isIntersecting}
              separator=","
            />
          }
          frontCenterLabel={`Global Deaths`}
          titleColor={"red"}
        ></Card>
      </StyledCards>
    </>
  )
}

export default Cards
