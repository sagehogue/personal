import React, { useState, useEffect } from "react"

// import { Line, Bar } from "react-chartjs-2"

import { getDailyData } from "../api"

const Chart = () => {
  const [dailyData, setDailyData] = useState({})
  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await getDailyData)
    }
    fetchApi()
  })
  // const lineChart = dailyData[0] ? (
  //   <Line
  //     data={{
  //       labels: "",
  //       datasets: [{}, {}],
  //     }}
  //   />
  // ) : null
  return <h1>Chart</h1>
}

export default Chart
