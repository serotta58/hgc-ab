/**
 * @prettier
 * @description: Gatsby node.js config
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const path = require('path')

/**
 * Create pages from markdown files.
 * @param graphql
 * @param actions
 * @returns {Promise<any[][]>}
 */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return Promise.all(
    ['articles','services'].map(async item => {
      const result = await graphql(
        `query {
          ${item}: allMarkdownRemark(
            limit: 100,
            filter: { fileAbsolutePath: { regex: "/${item}/" } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                id
                excerpt
                frontmatter {
                  imageURL
                  path
                  title
                  date(formatString: "YYYY MM DD")
                }
              }
            }
          }
        }
      `)

      return Promise.all(
        result.data[item].edges.map(({ node }) => {
          console.log('NODE', node)
          return createPage({
            component: path.resolve(`src/templates/general-template.js`),
            path: node.frontmatter.path,
            context: { id: node.id }
          })
        })
      )
    })
  )
}
