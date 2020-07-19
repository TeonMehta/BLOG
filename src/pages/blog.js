import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import Post from "../components/Post"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/blog.scss"
import Header from "../components/header"

const BlogPage = () => (
  <>
    <SEO title="Home" />
    <StaticQuery
      query={blogQuery}
      render={data => {
        console.log(data.allMarkdownRemark.edges)
        return (
          <div className={"blog-page-container"} fluid>
            <Header />
            {data.allMarkdownRemark.edges.map(({ node, i }) => (
              <Post
                className="post--"
                data-page={"blog-post"}
                key={node.id}
                number={i}
                title={node.frontmatter.title}
                subtitle={node.frontmatter.subtitle}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                slug={node.fields.slug}
                tags={node.frontmatter.tags}
              />
            ))}
          </div>
        )
      }}
    />
  </>
)

const blogQuery = graphql`
  query blogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            date(formatString: "MMMM Do, YYYY")
            author
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
