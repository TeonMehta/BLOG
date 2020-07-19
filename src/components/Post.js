import React from "react"
import { Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"

const Post = ({ title, subtitle, author, slug, date, body, tags }) => {
  return (
    <article className={"post"}>
      <div className="post_number"></div>
      <Link to={slug} className={"read_now"}>
        <div className="post_title">{title}</div>
      </Link>
      <div className="post_date">{date}</div>
      <ul className="post_tags">
        {tags.map(tag => (
          <li className={"tag"} key={tag}>
            <Link to={`/tag/${slugify(tag)}`}> {tag}</Link>
          </li>
        ))}
      </ul>
      <div className="post_subtitle">{subtitle}</div>
      {/*<div className="post_author">{author}</div>*/}
      {/*<div className="post_body">{body}</div>*/}
    </article>
  )
}

export default Post
