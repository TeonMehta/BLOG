import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import Post from "../components/Post"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/blog.scss"
import Header from "../components/header"


const BlogPage = () => (
  <>
    <SEO title="Home" />
    <Header siteTitle={"title"} />
    <StaticQuery
      query={blogQuery}
      render={data => {
        console.log(data.allMarkdownRemark.edges)
        return (
          <div className={"blog-page-container"} fluid>
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
                featuredImage={
                  node.frontmatter.featuredImage.childImageSharp.fluid
                }
                //body={node.excerpt}
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