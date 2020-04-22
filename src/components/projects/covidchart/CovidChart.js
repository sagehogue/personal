import React, { Component } from "react"
import styled from "styled-components"

import { colors } from "../../../themes/theme"

import Cards from "./Cards/Cards"
import Chart from "./Chart/Chart"
import CountryPicker from "./CountryPicker/CountryPicker"
import getData from "./api"

const Container = styled.section`
  background-color: ${colors.offwhite};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h2`
  margin-top: 2rem;
  font-size: 2.5rem;
  color: ${colors.darkText};
`

class CovidChart extends Component {
  state = {
    data: {},
    country: "",
  }
  componentDidMount() {
    this.retrieveData()
  }

  handleCountryChange = async country => {
    // Set the data
    // Set the state
    const countryData = await getData(country)
    console.log(countryData)
    this.setState({ data: countryData, country: country })
  }

  retrieveData = async () => {
    const data = await getData()
    console.log(data)
    this.setState({ data: data })
  }
  render() {
    const { data, country } = this.state
    return (
      <Container>
        <Title>Covid-19 Tracker</Title>
        <Cards data={data} />
        <br />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </Container>
    )
  }
}

export default CovidChart
