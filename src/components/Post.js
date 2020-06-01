import React from "react"
import { Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"

const Post = ({ title, author, slug, date, body, tags }) => {
  return (
    <div className={"post"}>
      <div className="title">{title}</div>
      <ul className="tags">
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/tag/${slugify(tag)}`}> {tag}</Link>
          </li>
        ))}
      </ul>
      <div className="date">{date}</div> by{" "}
      <div className="author">{author}</div>
      <br />
      <div className="body">{body}</div>
      <Link to={slug}>Read More</Link>
    </div>
  )
}

export default Post
