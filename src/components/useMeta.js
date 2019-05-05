/**
 * @prettier
 * @description: Hook to query site meta data
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useStaticQuery, graphql } from 'gatsby'

/**
 * Query site meta data
 * @returns {*}
 */
export default function useMeta() {
  const { site } = useStaticQuery(graphql`
    query Meta {
      site {
        siteMetadata {
          domain
          company
          defaultTitle
          preamble
          defaultDescription
          postamble
          contact {
            email
          }
        }
      }
    }
    `
  )

  return site.siteMetadata
}
