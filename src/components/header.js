import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <ul style={{ display: `flex` }}>
      <li className="logo">
        <Link to="/">TEON MEHTA</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">BLOG</Link>
      </li>
      {/*<li>*/}
      {/*  <Link to="/about">ABOUT</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link to="/contact">CONTACT</Link>*/}
      {/*</li>*/}
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
