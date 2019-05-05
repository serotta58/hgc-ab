/**
 * @prettier
 * @description: Hook to query articles meta data
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useStaticQuery, graphql } from 'gatsby'

/**
 * Query site articles meta data
 * @returns {*}
 */
export default function useArticles() {
  const { allMarkdownRemark: { edges: articles } }  = useStaticQuery(graphql`
    query ArticlesQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/articles/"}, frontmatter: { published: { ne: "No" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              imageURL
              path
              title
              date(formatString: "DD MMMM YYYY")
            }
            excerpt
          }
        }
      }
    }
    `
  )

  return articles
}
