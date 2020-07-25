import React from "react"
import "../styles/header.scss"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Toggle = () => {
  return (
    <>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="light-dark">
            <input
              className="light-dark-input"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            <span className="light-dark-text">Dark mode</span>
          </div>
        )}
      </ThemeToggler>
    </>
  )
}

export default Toggle
