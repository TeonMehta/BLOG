import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Header from "../components/header"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Header/>
    <div className="not-found">
      <h1>NOT FOUND</h1>
      <p>¯\_(ツ)_/¯</p>
      <p>You just hit a route that doesn&#39;t exist... </p>
      <Link to={"/"} >
          JUST TAKE ME BACK
      </Link>
    </div>
  </>
)

export default NotFoundPage
