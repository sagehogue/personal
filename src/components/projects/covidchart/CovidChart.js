import React, { Component } from "react"
import styled from "styled-components"

import { colors } from "../../../themes/theme"

import Cards from "./Cards/Cards"
import Chart from "./Chart/Chart"
import CountryPicker from "./CountryPicker/CountryPicker"
import getData from "./api"

const Container = styled.section`
  background-color: ${colors.deepblue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h2`
  margin-top: 2rem;
  font-size: 2.5rem;
  color: ${colors.offwhite};
`

class CovidChart extends Component {
  state = {
    data: {},
  }
  componentDidMount() {
    this.retrieveData()
  }

  retrieveData = async () => {
    const data = await getData()
    console.log(data)
    this.setState({ data: data })
  }
  render() {
    const { data } = this.state
    return (
      <Container>
        <Title>Covid-19 Tracker</Title>
        <Cards data={data} />
        <br />
        <CountryPicker />
        <Chart />
      </Container>
    )
  }
}

export default CovidChart
