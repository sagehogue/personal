import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/UI/Card/Card"

import GlobalStyles from "../themes/globals"

import Theme from "../themes/theme"
import { colors, fonts } from "../themes/theme"

import { FaRegKeyboard } from "react-icons/fa"
import { FaPaintBrush } from "react-icons/fa"
import { FaBook } from "react-icons/fa"
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
  max-width: 85%;
  margin: auto;
  display: grid;
  font-family: ${styles.font}, arial;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding-bottom: 2rem;
  // Unsure about this padding - get input
  padding-top: 2rem;
  height: 75vh;
  & .animate {
    animation-fill-mode: forwards;
  }
  & .gatsby-image-wrapper:first-of-type {
    grid-row: 1 / 3;
    grid-column: 3 / 6;
  }
  & .gatsby-image-wrapper:nth-of-type(2) {
    grid-row: 2 / 4;
    grid-column: 1 / 3;
  }

  @media screen and (max-width: 550px) {
    gap: 0.75rem;
  }
  & .monoton {
    font-family: ${fonts.logoFont1};
  }

  @media screen and (max-width: 400px) {
    gap: 0.45rem;
    .gatsby-image-wrapper:first-of-type {
      grid-row: 1 / 2;
      grid-column: 3 / 6;
    }
  }
`

const ColoredMain = styled.main`
  background-color: ${colors.offwhite};
`
// Removed text shadow code - fun effect but not necessary for desired look.
// text-shadow: -1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000,

// The animations (built with 10sec use case in mind)

const firstAnimation = keyframes`
0% {
  color: transparent;
}
3% {
  color: transparent;
}
5% {
  color: hotpink;
}
8% {
  color: #f7f7f7
} 
`

const FirstToAppear = styled.span`
  animation: ${firstAnimation} 10s ease-in;
`

const secondAnimation = keyframes`
0% {
  color: transparent
}
11% {
  color: transparent;
}
13% {
  color: hotpink;
}
16% {
  color: #f7f7f7;
}
`

const SecondToAppear = styled.span`
  animation: ${secondAnimation} 10s ease-in;
`

const thirdAnimation = keyframes`
0% {
  transform: translateX(70vw)
}
19% {
  transform: translateX(70vw)
}
25% {
  transform: translateX(-2rem)
}
28% {
  transform: translateX(1rem)
}
31% {
  transform: translateX(-.5rem)
}
33% {
  transform: translateX(0)
}
`

const Greeting = styled.h1`
  overflow: hidden;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  margin: auto;
  font-size: 3rem;
  color: ${colors.offwhite};
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
    font-size: 3rem;
  }
  @media screen and (max-width: 2000px) and (max-height: 1100px) {
    line-height: 4rem;
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
  font-size: 2.75rem;
  color: ${colors.offwhite};
  text-align: center;
  line-height: 3rem;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  min-width: 100%;
  animation: ${thirdAnimation} 10s ease-in;
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
  overflow: hidden;
  max-width: 85%;
  display: grid;
  grid-template-areas:
    "a b b"
    "a b b"
    "c c c";
  margin: auto;
  height: inherit;
  text-align: center;
  background-color: inherit;
  font-size: 2rem;
  line-height: 2.5rem;
  height: 75vh;
  margin: 2rem auto;
  & h3 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-area: a;
    font-size: 2.5rem;
    margin: 0;
    padding: 0;
  }
  & p {
    grid-area: c;
  }
  & .img {
    grid-area: b;
  }
`

const SkillsSection = styled.section`
  max-width: 85%;
  margin: auto;
  height: 90vh;
  background-color: inherit;
  display: flex;
  justify-content: space-around;
  & > div {
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
      thirdeye: file(relativePath: { eq: "index/thirdeye.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      palette: file(relativePath: { eq: "index/palette.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      splash: file(relativePath: { eq: "index/splash.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      brickwall: file(relativePath: { eq: "index/brickwall.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blueorange: file(relativePath: { eq: "index/blueorange.jpg" }) {
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
  console.log(data.thirdeye)
  const Desktop = (
    <>
      <Layout>
        <SEO title="Home" />
        <ColoredMain>
          <Theme color>
            <Hero>
              <Greeting>
                <FirstToAppear className={"animate first"}>Hi,</FirstToAppear>
                <br />
                <SecondToAppear className={"animate second"}>
                  I'm Sage{" "}
                </SecondToAppear>
              </Greeting>
              <Img
                key={data.portland.id}
                fluid={data.portland.childImageSharp.fluid}
              />
              <Img key={data.code.id} fluid={data.code.childImageSharp.fluid} />
              {/* <Img
                key={data.laptop.id}
                fluid={data.laptop.childImageSharp.fluid}
              /> */}

              {/* {data.images.nodes.map(image => (
          <Img key={image.id} fluid={image.childImageSharp.fluid} />
        ))} */}
              <Intro>
                a web developer & entrepreneur headquartered in the silicon
                forest, Portland, OR.
              </Intro>
            </Hero>
          </Theme>
          <Theme>
            <AboutSection>
              <h3>
                <span>Independent.</span>
                <br />
                <span>Impassioned.</span>
                <br />
                <span>Iconoclastic.</span>
              </h3>
              <div className="img">
                <Img
                  key={data.thirdeye.id}
                  fluid={data.thirdeye.childImageSharp.fluid}
                />
              </div>
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
                <Card
                  icon={<FaPaintBrush />}
                  title={"Designer"}
                  description={`I value minimalism, geometry, and color in my designs. Each unique project has its own lessons to teach.`}
                  listTitle={"Check out my art"}
                  listItems={["Art1", "Art2", "Art3", "Art4", "Art5"]}
                ></Card>
              </div>
              <div>
                <Card
                  icon={<FaRegKeyboard />}
                  title={"Web Developer"}
                  description={`I use the most effective modern technology to create performant and elegant web solutions for businesses and individuals. Whether you need a personal professional portfolio, an online business presence, an ecommerce solution or anything else we can work together to create a solution.`}
                  listTitle={"My tools"}
                  listItems={[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "React",
                    "Gatsby",
                    "Google Firebase",
                  ]}
                ></Card>
              </div>
              <div>
                <Card
                  icon={<FaBook />}
                  title={"Mentor"}
                  description={`I've always found programming gets done best when it is a collaborative effort. A lot of people helped me learn and so I've always had the mindset to want to pay it forward.`}
                  listTitle={"Experiences"}
                  listItems={[
                    "Teacher's Assistant in Intro to Python at PDX Code Guild - April 2018",
                    "1 on 1 tutoring in HTML/CSS/JavaScript, React - 6 months",
                  ]}
                ></Card>
              </div>
            </SkillsSection>
          </Theme>
        </ColoredMain>
      </Layout>
      <GlobalStyles />
    </>
  )
  return Desktop
}

export default IndexPage
