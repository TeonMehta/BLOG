import React from "react"
import SEO from "../components/seo"
import { slugify } from "../util/utilityFunctions"
import Header from "../components/header"

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext

  return (
    <>
      <SEO title="All Topics" />
      <div className={"blog-page-container"}>
        <Header />
        <ul className="topics">
          {tags.map(tag => (
            <li key={tag}>
              <a href={`/topic/${slugify(tag)}`}>
                {tag} ~ {tagPostCounts[tag]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TagsPage
