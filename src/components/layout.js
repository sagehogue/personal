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

  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
