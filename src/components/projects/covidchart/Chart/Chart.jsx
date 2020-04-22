import React, { useState, useEffect } from "react"
import { getDailyData } from "../api"
import { Line, Bar } from "react-chartjs-2"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 60vw;
  margin: 1rem 0;
`
const Chart = ({ data, country }) => {
  let dailyData,
    setDailyData = []
  ;[dailyData, setDailyData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await getDailyData())
    }
    fetchApi()
    // console.log(dailyData)
  }, [])
  console.log(dailyData)
  const LineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null
  console.log(data.confirmed, data.recovered, data.deaths)

  const BarChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],

            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current situation in ${country}` },
      }}
    />
  ) : null
  // const lineChart = dailyData[0] ? (
  //   <Line
  //     data={{
  //       labels: "",
  //       datasets: [{}, {}],
  //     }}
  //   />
  // ) : null
  return <Container>{country ? BarChart : LineChart}</Container>
}

export default Chart
