/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import theme from "../../theme"
import Header from "./header"
import ResetStyles from "./reset"
import Footer from "./footer"

const Layout = props => {
  const [displayCustomFooter, setDisplayCustomFooter] = useState(false)
  const [displayCustomHeader, setDisplayCustomHeader] = useState(false)
  useEffect(() => {
    if (window) {
      let currentUrl = window.location.href.split(window.location.origin)[1]
      if (currentUrl.includes("about")) {
        setDisplayCustomFooter(true)
        setDisplayCustomHeader(true)
      }
      if (currentUrl.includes("contact")) {
        setDisplayCustomFooter(true)
      }
    }
  }, [])
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <ResetStyles />
          {!displayCustomHeader && (
            <Header
              bgColor="#ffe884"
              siteTitle={data.site.siteMetadata.title}
            />
          )}
          <main>{props.children}</main>
          {!displayCustomFooter && <Footer />}
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout
