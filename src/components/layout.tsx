/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/global.css"
import "../styles/prism.css"

const Layout = ({ children, isHome }) => {
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
      <div className="viewport">
        <div className="viewport-top">
          <Header isHome={isHome} siteTitle={"deznit"} />
        </div>
        <main
          className="site-main"
          style={isHome ? { marginTop: "-200px" } : { marginTop: "50px" }}
        >
          {children}
        </main>
        {/* ========== footer start ========== */}
        <div className="viewport-bottom">
          <Footer></Footer>
        </div>
        {/* ========== footer end ========== */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
