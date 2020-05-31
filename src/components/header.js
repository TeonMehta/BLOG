import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div style={{ display: `flex` }}>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <h1>
        <Link to="/about">ABout</Link>
      </h1>
      <h1>
        <Link to="/topics">Topics</Link>
      </h1>
      <h1>
        <Link to="/team">Team</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
