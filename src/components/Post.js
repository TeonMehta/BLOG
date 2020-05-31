import React from "react"
import { Link } from "gatsby"

const Post = ({ title, author, path, date, body }) => {
  return (
    <div className={"post"}>
      <div className="title">{title}</div>
      <div className="date">{date}</div> by{' '}
      <div className="author">{author}</div>
      <br />
      <div className="body">{body}</div>
      <Link to={path}>Read More</Link>
    </div>
  )
}

export default Post
