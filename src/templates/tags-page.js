import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { slugify } from "../util/utilityFunctions"

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext

  return (
    <Layout>
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
    </Layout>
  )
}

export default TagsPage
