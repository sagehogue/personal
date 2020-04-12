import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/UI/Card/Card"

import GlobalStyles from "../themes/globals"

import Theme from "../themes/theme"
import { colors } from "../themes/theme"

import { FaRegKeyboard } from "react-icons/fa"
import { FaPaintBrush } from "react-icons/fa"
import { FaAddressBook } from "react-icons/fa"
// CSS Vars
const styles = {
  font: "Montserrat",
  maxWidthDesktop: "85vw",
  maxWidth: "95vw",
}
// CSS Todos
// I think I need make a separate mobile layout to render if
// Screen width is under 768px. Design breaks. Currently only
// responsive to 768px.

// Styled Components
const Hero = styled.section`
  width: 100%;
  display: grid;
  font-family: ${styles.font}, arial;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding-bottom: 2rem;
  // Unsure about this padding - get input
  padding-top: 2rem;
  height: 85vh;
  & .gatsby-image-wrapper:first-of-type {
    grid-row: 1 / 2;
    grid-column: 2 / 6;
  }
  & .gatsby-image-wrapper:nth-of-type(2) {
    grid-row: 2 / 4;
    grid-column: 1 / 3;
  }
  & .gatsby-image-wrapper:nth-of-type(3) {
    grid-row: 2 / 4;
    grid-column: 2 / 3;
  }
  & .gatsby-image-wrapper:last-of-type {
    grid-column: 3 / 6;
    grid-row: 2 / 3;
  }

  @media screen and (max-width: 550px) {
    gap: 0.75rem;
  }

  @media screen and (max-width: 400px) {
    gap: 0.45rem;
    .gatsby-image-wrapper:first-of-type {
      grid-row: 1 / 2;
      grid-column: 3 / 6;
    }
  }
`

const Greeting = styled.h1`
  overflow: hidden;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  margin: auto;
  font-size: 4rem;
  color: #417b8e;
  text-shadow: -1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
  text-align: center;
  max-width: 100%;
  line-height: 4rem;
  max-height: 100%;

  @media screen and (max-width: 2399px) {
    line-height: 6rem;
    font-size: 5rem;
  }

  @media screen and (max-width: 2000px) {
    line-height: 5rem;
    font-size: 4rem;
  }

  @media screen and (max-width: 1800px) {
    line-height: 4.5rem;
    font-size: 3.5rem;
  }

  @media screen and (max-width: 1100px) {
    line-height: 4rem;
    font-size: 3rem;
  }

  @media screen and (max-width: 1100px) and (max-height: 700px) {
    line-height: 3.5rem;
    font-size: 2.75rem;
  }

  @media screen and (max-width: 700px) {
    line-height: 3.5rem;
    font-size: 2.5rem;
  }

  @media screen and (max-width: 620px) {
    line-height: 3rem;
    font-size: 2rem;
  }
  @media screen and (max-width: 400px) {
    max-width: 33vw;
    grid-column: 1 / 3;
  }
`

const Intro = styled.h2`
  overflow: hidden;
  grid-row: 3 / 4;
  grid-column: 3 / 6;
  margin: 0;
  font-size: 3rem;
  color: #417b8e;
  text-shadow: -1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
  text-align: center;
  line-height: 3.5rem;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  min-width: 100%;

  @media screen and (min-width: 2000px) {
    line-height: 4.5rem;
  }
  @media screen and (min-width: 2400px) {
    font-size: 4.5rem;
    line-height: 6rem;
  }
  @media screen and (max-width: 1600px) {
    font-size: 2rem;
    line-height: 3rem;
  }
  @media screen and (max-width: 910px) {
    font-size: 1.9rem;
    line-height: 2.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.75rem;
    line-height: 2rem;
  }
`

const AboutSection = styled.section`
  height: 70vh;
  text-align: center;
  background-color: inherit;
  font-size: 2rem;
  line-height: 3.25rem;
  & h3 {
    font-size: 2.5rem;
    padding: 3.5rem 0;
    line-height: 4.25rem;
  }
  & :last-child {
    margin-top: 3.25rem;
    padding: 1.5rem 0;
  }
`

const SkillsSection = styled.section`
  height: 75vh;
  background-color: ${colors.skyblue};
  display: flex;
  justify-content: space-around;
  & div {
    margin-top: 3rem;
  }
`

const Highlight = styled.span`
  background-color: rgba(252, 245, 50, 0.75);
`
// Old query used to get all images in an array
// const data = useStaticQuery(graphql`
//     query Images {
//       images: allFile(filter: { relativeDirectory: { eq: "index" } }) {
//         nodes {
//           childImageSharp {
//             fluid(
//               duotone: { highlight: "#A1DAED", shadow: "#417B8E", opacity: 25 }
//               maxWidth: 700
//               maxHeight: 400
//             ) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//           id
//         }
//       }
//     }
//   `)
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      portland: file(relativePath: { eq: "index/portland.jpg" }) {
        id
        childImageSharp {
          fluid(maxHeight: 330, maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      code: file(relativePath: { eq: "index/code.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      laptop: file(relativePath: { eq: "index/laptop.webp" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const Desktop = (
    <>
      <Layout>
        <SEO title="Home" />
        <Theme color>
          <main>
            <Hero>
              <Greeting>
                Hi,
                <br />
                I'm
                <br />
                <Highlight>Sage</Highlight>
              </Greeting>
              <Img
                key={data.portland.id}
                fluid={data.portland.childImageSharp.fluid}
              />
              <Img key={data.code.id} fluid={data.code.childImageSharp.fluid} />
              <Img
                key={data.laptop.id}
                fluid={data.laptop.childImageSharp.fluid}
              />

              {/* {data.images.nodes.map(image => (
          <Img key={image.id} fluid={image.childImageSharp.fluid} />
        ))} */}
              <Intro>
                a <Highlight>web developer</Highlight> & entrepreneur
                headquartered in the silicon forest,{" "}
                <Highlight>Portland, OR.</Highlight>
              </Intro>
            </Hero>
          </main>
        </Theme>
        <Theme>
          <AboutSection>
            <h3>
              Independent.
              <br />
              Impassioned.
              <br />
              Iconoclastic.
            </h3>
            <p>
              I design & develop professional, dynamic web pages and
              applications for small business owners, artists, activists, and
              free thinkers.
            </p>
          </AboutSection>
        </Theme>
        <Theme color>
          <SkillsSection>
            <div>
              <Card icon={<FaPaintBrush />} title={"Design"}></Card>
              <span></span>
            </div>
            <div>
              <Card
                icon={<FaRegKeyboard />}
                title={"Front-end Development"}
              ></Card>
              <span></span>
            </div>
            <div>
              <Card icon={<FaAddressBook />} title={"Marketing"}></Card>
              <span></span>
            </div>
          </SkillsSection>
        </Theme>
      </Layout>
      <GlobalStyles />
    </>
  )
  return window.innerWidth < 768 ? Desktop : Desktop
}

export default IndexPage
