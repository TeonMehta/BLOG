import React from "react"
import { Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"
import Img from "gatsby-image"

const Post = ({
  title,
  subtitle,
  author,
  slug,
  date,
  body,
  tags,
  featuredImage,
}) => {
  return (
    <div className={"post"}>
      <Link to={slug}>
        <Img
          className="post_image"
          data-page={"blog-post"}
          fluid={featuredImage}
        />
      </Link>
      <div className="post_title">{title}</div>
      <div className="post_subtitle">{subtitle}</div>
      {/*<div className="post_date">{date}</div>*/}
      {/*<div className="post_author">{author}</div>*/}
      <br />
      {/*<div className="post_body">{body}</div>*/}
      <ul className="post_tags">
        {tags.map(tag => (
          <li className={"tag"} key={tag}>
            <Link to={`/tag/${slugify(tag)}`}> {tag}</Link>
          </li>
        ))}
      </ul>
      <Link to={slug}>Read</Link>
    </div>
  )
}

export default Post
