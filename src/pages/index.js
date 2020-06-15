import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/blog.scss"
import Header from "../components/header"
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header siteTitle={"HOME"} />
    <div className={"index-page-container"} fluid>
      <div className="start_reading">
        <Link to="/blog">START READING</Link>
      </div>
      <footer>
        <div className="social">
          <ul>
            <li><a href="https://www.facebook.com/teon.thirrteen" target="_blank">FACEBOOK</a></li>
            <li><a href="https://www.linkedin.com/in/teon-mehta-19536b135" target="_blank">LINKEDiN</a></li>
            <li><a href="https://github.com/TeonMehta" target="_blank">GITHUB</a></li>
          </ul>
        </div>
        <div className="text">
          <p>© Teon Mehta 2021 | Powered by yours truly | TeonMehta@gmail.com</p>
        </div>
      </footer>
    </div>
  </>
)

// const indexQuery = graphql`
//   query indexQuery {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             subtitle
//             date(formatString: "MMMM Do, YYYY")
//             author
//             tags
//             featuredImage {
//               childImageSharp {
//                 fluid(maxWidth: 1000) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

export default IndexPage
