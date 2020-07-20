import React from "react"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/blog.scss"
import BlogPage from "./blog"

const IndexPage = () => (
  <>
    <SEO title="A personal blog" />
    <BlogPage />
  </>
)

export default IndexPage
