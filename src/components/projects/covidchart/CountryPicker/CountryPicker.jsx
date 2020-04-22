import React, { useState, useEffect } from "react"
import { NativeSelect, FormControl } from "@material-ui/core"

import { getAllCountryNames } from "../api"

import styled from "styled-components"
const Form = styled(FormControl)``

const Select = styled(NativeSelect)``

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([])
  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await getAllCountryNames())
    }

    fetchCountries()
  }, [setFetchedCountries])
  return (
    <Form>
      <Select
        defaultValue=""
        onChange={e => handleCountryChange(e.target.value)}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </Select>
    </Form>
  )
}

export default CountryPicker
