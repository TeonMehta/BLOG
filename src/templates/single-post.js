import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { slugify } from "../util/utilityFunctions"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <>
      <SEO title={post.title} />
      <div className="single_post">
        <div className="single_post_image"> </div>
        <article>
          <h1 className="single_title">{post.title}</h1>
          <div className="single_date">{post.date}</div> by{" "}
          <div className="single_author">{post.author}</div>
          <br />
          <div
            className="single_body"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
          <ul className="single_tags">
            {post.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}> {tag}</Link>
              </li>
            ))}
          </ul>
        </article>
        <Link to={'/'}>back</Link>
      </div>
    </>
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
        date(formatString: "MMMM Do, YYYY")
        tags
      }
    }
  }
`
export default SinglePost
