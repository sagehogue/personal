import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VisibleBR from "../components/UI/VisibleBR/VisibleBR"
import Card from "../components/UI/Card/Card"
import CovidChart from "../components/projects/covidchart/CovidChart"

import GlobalStyles from "../themes/globals"
import Theme from "../themes/theme"
import { colors } from "../themes/theme"

import { FaBookOpen, FaComment, FaTree } from "react-icons/fa"

const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: space-around;
  height: 50vh;
  background-color: ${colors.deepblue};
  & h2,
  & h3 {
    display: block;
    margin: 0 auto;
    transform: translateY(-3rem);
  }

  & h2 {
    padding-top: 1.75rem;
    color: ${colors.offwhite};
    font-size: 2rem;
    line-height: 3.5rem;
    width: 85%;
  }

  & h3 {
    text-align: center;
    font-weight: 400;
    padding-bottom: 1.75rem;
    color: ${colors.offwhite};
    font-size: 1.5rem;
    width: 85vw;
  }
`

const SecondProject = styled.section`
  display: flex;
  justify-content: space-around;
  height: 50vh;
  background-color: ${colors.deepblue};
  margin: auto;
`

const ProjectGrid = styled.main`
  display: flex;
  justify-content: space-around;
  max-width: 85vw;
  margin: auto;
  transform: translateY(-5rem);
`

const projects = () => {
  return (
    <>
      <Layout>
        <Theme>
          <Header>
            <h2>
              Here I've catalogued <br />
              the knick-knacks I've made along the way.
            </h2>
          </Header>
          <CovidChart />
          <SecondProject />
          <ProjectGrid>
            <Card
              icon={
                <Link to="/story">
                  <FaBookOpen
                    onClick={e => {
                      e.stopPropagation()
                    }}
                  />
                </Link>
              }
              title={"Vistelse"}
              description={`A 'choose your own adventure' experience`}
            />
            <Card
              icon={
                <FaTree
                  onClick={e => {
                    e.stopPropagation()
                  }}
                />
              }
              title={"Canvas Animation"}
              description={`Fractal animation.`}
            />
            <Card
              icon={
                <FaComment
                  onClick={e => {
                    e.stopPropagation()
                  }}
                />
              }
              title={"Chat Application"}
              description={`No storage socket.io application`}
            />
          </ProjectGrid>
        </Theme>
      </Layout>
      <GlobalStyles />
    </>
  )
}

export default projects
