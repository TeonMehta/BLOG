import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { slugify } from "../util/utilityFunctions"
import Img from "gatsby-image"
import "../styles/single_post.scss"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  let featuredImgFluid = post.featuredImage.childImageSharp.fluid
  return (
    <>
      <SEO title={post.title} />
      <div className="single_post">
        <Img
          className="single_image"
          data-page={"post"}
          fluid={featuredImgFluid}
        />

        <article>
          <Link to={"/blog"} className={"back"}>
            &#8592; Back
          </Link>
          <h1 className="single_title">{post.title}</h1>
          <h4 className="single_subtitle">{post.subtitle}</h4>
          <div className="single_date">{post.date}</div>
          <div className="single_author">{post.author}</div>{" "}
          <ul className="single_tags">
            {post.tags.map(tag => (
              <li className={"tag"} key={tag}>
                <Link to={`/tag/${slugify(tag)}`}> {tag}</Link>
              </li>
            ))}
          </ul>
          <br/>
          <div
            className="single_body"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </article>
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
        subtitle
        author
        date(formatString: "MMMM Do, YYYY")
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default SinglePost
