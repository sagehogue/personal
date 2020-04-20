import React, { Component } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VisibleBR from "../components/UI/VisibleBR/VisibleBR"

import GlobalStyles from "../themes/globals"
import Theme from "../themes/theme"
import { colors } from "../themes/theme"

import FractalTree from "../components/canvas/FractalTree/FractalTree"
import Mandelbrot from "../components/canvas/Mandelbrot/Mandelbrot"
import TriangleFractal from "../components/canvas/TriangleFractal/TriangleFractal"

const Header = styled.header`
  background-color: ${colors.deepblue};
  height: 50vh;
`

const Grid = styled.main`
  display: grid;
  height: 90vh;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  & canvas {
    width: 100%;
    height: 100%;
  }
  & .fractaltree {
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }
  & .mandelbrot {
    grid-row: 1 / 3;
    grid-column: 3 / 6;
  }
  & .trianglefractal {
    grid-row: 3 / 6;
    grid-column: 1 / 3;
  }
`

const canvas = () => {
  return (
    <Layout>
      <Theme>
        <Header />
        <Grid>
          <FractalTree />
          <Mandelbrot />
          <TriangleFractal />
        </Grid>
      </Theme>
      <GlobalStyles />
    </Layout>
  )
}

export default canvas
