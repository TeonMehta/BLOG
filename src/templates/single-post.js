import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { slugify } from "../util/utilityFunctions"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <div className="date">{post.date}</div> by{" "}
      <div className="author">{post.author}</div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <ul className="tags">
        {post.tags.map(tag => (
          <li key={tag}>
            <Link to={`/tag/${slugify(tag)}`}> {tag}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MM Do YYYY")
        tags
      }
    }
  }
`
export default SinglePost
