import React from "react"
import SEO from "../components/seo"
import { slugify } from "../util/utilityFunctions"

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext

  return (
    <>
      <SEO title="All tags" />
      <ul>
        {tags.map(tag => (
          <li key={tag}>
            <a href={`/tag/${slugify(tag)}`}>
              {tag} {tagPostCounts[tag]}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TagsPage
