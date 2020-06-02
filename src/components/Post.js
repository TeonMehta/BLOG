import React from "react"
import { Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"

const Post = ({ title, author, slug, date, body, tags }) => {
  return (
    <div className={"post"}>
      <Link to={slug}>
        <div className="post_image" data-page={"blog-post"}></div>
      </Link>
      <div className="post_title">{title}</div>
      <div className="post_date">{date}</div> by{" "}
      <div className="post_author">{author}</div>
      <br />
      <div className="post_body">{body}</div>
      <ul className="post_tags">
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/tag/${slugify(tag)}`}> {tag}</Link>
          </li>
        ))}
      </ul>
      <Link to={slug}>Read More</Link>
    </div>
  )
}

export default Post
