import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import Post from "../components/Post"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>my Blog</h1>
    <StaticQuery
      query={indexQuery}
      render={data => {
        console.log(data)
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                data-page={"blog-post"}
                key={node.id}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                slug={node.fields.slug}
                featuredImage={
                  node.frontmatter.featuredImage.childImageSharp.fluid
                }
                body={node.excerpt}
                tags={node.frontmatter.tags}
              />
            ))}
          </div>
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
                fluid(maxWidth: 800) {
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
