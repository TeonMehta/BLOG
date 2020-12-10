import React from "react"
import "../styles/header.scss"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Toggle = () => {
  return (
    <>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="light-dark">
            <input
              className="light-dark-input"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            {console.log(toggleTheme)}
            <span>Dark Mode</span>
          </label>
        )}
      </ThemeToggler>
    </>
  )
}

export default Toggle
