const url = "https://covid19.mathdro.id/api"

const getData = async country => {
  let mutableURL = url

  if (country) {
    mutableURL = `${url}/countries/${country}`
  }
  try {
    //   Fetching Data
    let response = await fetch(mutableURL)
    // Destructuring retrieved data
    let { confirmed, recovered, deaths, lastUpdate } = await response.json()
    console.log(confirmed, recovered, deaths, lastUpdate)
    return { confirmed, recovered, deaths, lastUpdate }
    // Returning relevant data
    // return {
    //   confirmed,
    //   recovered,
    //   deaths,
    //   lastUpdate,
    // }
  } catch (error) {
    console.log(`Error!:\n ${error}`)
  }
}

export const getDailyData = async () => {
  try {
    const response = await fetch(`${url}/daily`)
    const data = await response.json()
    // Destructuring retrieved data
    const modifiedData = await Object.entries(data).map(dailyData => ({
      confirmed: dailyData[1].confirmed.total,
      deaths: dailyData[1].deaths.total,
      date: dailyData[1].reportDate,
    }))
    return modifiedData
  } catch (error) {
    console.log(`Error:\n\n${error}`)
  }
}

export const getAllCountryNames = async () => {
  try {
    const response = await fetch(`${url}/countries`)
    const { countries } = await response.json()
    return countries.map(country => country.name)
  } catch (error) {
    console.log(error)
  }
}

export default getData
