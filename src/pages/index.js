import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/blog.scss"
import Header from "../components/header"

const IndexPage = () => (
  <>
    <SEO title="Teon Mehta" />
    <div className="container-fluid" fluid>
      {/*<Header />*/}
      <div className="start_reading">
        <Link to="/blog">START READING</Link>
      </div>
    </div>
  </>
)

export default IndexPage
