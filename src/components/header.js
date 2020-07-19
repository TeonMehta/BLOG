import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"
import Toggle from "./toggle"


const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">TEON MEHTA</Link>
    <Toggle/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
