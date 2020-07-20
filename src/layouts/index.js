/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import "../styles/main.scss"
import "../styles/MonumentExtended-Regular.otf"

const Layout = ({ children, location }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--textNormal)",
        transition: "color 0.2s ease-out, background 0.2s ease-out",
      }}
    >
      {children}
      {/*<Header siteTitle={data.site.siteMetadata.title} />*/}
      {/*<Transition location={location}></Transition>*/}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
