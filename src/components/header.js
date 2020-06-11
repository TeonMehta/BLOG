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
        <Link to="/">{siteTitle}</Link>
      </li>
      <li>
        <Link to="/about">BLOG</Link>
      </li>
      <li>
        <Link to="/topics">ABOUT</Link>
      </li>
      <li>
        <Link to="/team">Topics</Link>
      </li>
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



