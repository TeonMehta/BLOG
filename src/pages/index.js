import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import Post from "../components/Post"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/header"
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header siteTitle={"title"} />
    <StaticQuery
      query={indexQuery}
      render={data => {
        console.log(data.allMarkdownRemark.edges)
        return (
          <Container className={"blog-page-container"} fluid>
            {data.allMarkdownRemark.edges.map(({ node, i }) => (
              <Post
                className="post--"
                data-page={"blog-post"}
                key={node.id}
                title={node.frontmatter.title}
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
          </Container>
        )
      }}
    />
  </>
)

const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
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

export default IndexPage
