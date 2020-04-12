/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Layout = styled.div`
    background-color: #daecf2;
  `

  const Theme = styled.div`
    margin: 0 auto;
    max-width: 85vw;
    @media screen and (max-width: 550px) {
      max-width: 95vw;
    }
  `
  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

  // Return desktop view or mobile view, depending on screen size
  return window.innerWidth < 800 ? (
    <>
      <Layout>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Theme style={{}}>
          <main>{children}</main>
        </Theme>
      </Layout>
    </>
  ) : (
    <>
      <Layout>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Theme style={{}}>
          <main>{children}</main>
        </Theme>
      </Layout>
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
