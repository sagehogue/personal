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
  height: 75vh;
  background-color: ${colors.deepblue};
  & h2,
  & h3 {
    display: block;
    margin: 0 auto;
    transform: translateY(-3rem);
  }

  & h2,
  & p {
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

  & p {
    text-align: right;
    margin: 0 auto;
    & ul {
      list-style: none;
      margin: 0;
      text-align: center;
      & li {
        margin: 0;
        padding: 0;
      }
    }
    & ul,
    & li {
      display: inline-block;
    }
  }
`

const SecondProject = styled.section`
  display: flex;
  justify-content: space-around;
  height: 75vh;
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

const TranslateY = styled.div`
  transform: translateY(-3vh);
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
            <p>
              <ul>
                Examples inlcude: <br /> <li>sweet dynamic web apps,</li>
                <br /> <li>math inspired art, beautiful websites,</li> <br />
                <li>and the products of my various tech undertakings.</li>
              </ul>
            </p>
          </Header>
          <TranslateY>
            <CovidChart />
          </TranslateY>
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
