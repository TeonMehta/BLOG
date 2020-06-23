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
      <div className="post_number"></div>
      <div className="post_title">{title}</div>
      <ul className="post_tags">
        {tags.map(tag => (
          <li className={"tag"} key={tag}>
            <Link to={`/tag/${slugify(tag)}`}> {tag}</Link>
          </li>
        ))}
      </ul>
      <div className="post_subtitle">{subtitle}</div>
      <Link to={slug} className="post_image">
        <Img data-page={"blog-post"} fluid={featuredImage} />
      </Link>
      {/*<Link to={slug} className={"read_now"}>*/}
      {/*  Read Now*/}
      {/*</Link>*/}
      {/*<div className="post_date">{date}</div>*/}
      {/*<div className="post_author">{author}</div>*/}
      {/*<div className="post_body">{body}</div>*/}
    </div>
  )
}

export default Post
