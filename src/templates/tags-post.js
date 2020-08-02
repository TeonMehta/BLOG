import React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post"

const TagsPost = ({ data, pageContext }) => {
  // const { tag } = pageContext
  // const { totalCount } = data.allMarkdownRemark
  // const pageHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`
  return (
    <div>
      <>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            subtitle={node.frontmatter.subtitle}
            author={node.frontmatter.author}
            date={node.frontmatter.date}
            body={node.export}
            tags={node.frontmatter.tags}
          />
        ))}
      </>
    </div>
  )
}

export default TagsPost

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            author
            tags
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
