const url = "https://covid19.mathdro.id/api"

const getData = async () => {
  try {
    //   Fetching Data
    let response = await fetch(url)
    // Destructuring retrieved data
    let { confirmed, recovered, deaths, lastUpdate } = await response.json()
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

const getDailyDate = async () => {
  try {
    let response = await fetch(`${url}/daily`)
    // Destructuring retrieved data
    console.log(await response.json())
  } catch (error) {}
}

export default getData
