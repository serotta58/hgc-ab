/**
 * @prettier
 * @description: Hook to query service meta data
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useStaticQuery, graphql } from 'gatsby'

/**
 * Query site service meta data
 * @returns {*}
 */
export default function useServices() {
  const { allMarkdownRemark: { edges: services } }  = useStaticQuery(graphql`
    query ServicesQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/services/"}, frontmatter: { published: { ne: "No" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              imageURL {
                publicURL
              }
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

  return services
}
