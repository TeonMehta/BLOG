import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div>
      <footer>
        <br />
        <Link to={"/"} className={"back"}>
          &#8592; Back
        </Link>
        {/*<div className="social">*/}
        {/*  <ul>*/}
        {/*    <li><a href="https://www.facebook.com/teon.thirrteen" target="_blank">FACEBOOK</a></li>*/}
        {/*    <li><a href="https://www.linkedin.com/in/teon-mehta-19536b135" target="_blank">LINKEDiN</a></li>*/}
        {/*    <li><a href="https://github.com/TeonMehta" target="_blank">GITHUB</a></li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
        {/*<div className="text">*/}
        {/*  <p>Personal Blog By <a href="mailto:TeonMehta@gmail.com">Teon Mehta</a> | © Teon Mehta 2021 </p>*/}
        {/*</div>*/}
      </footer>
    </div>
  )
}

export default Footer
