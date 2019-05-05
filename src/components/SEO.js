/**
 * @prettier
 * @description: SEO Component
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import Helmet from 'react-helmet'

/**
 * SEO Component
 * @param props
 * @returns {*}
 * @constructor
 */
export default function SEO(props) {
  const { title, defaultTitle, defaultDescription, domain, lang, keywords } = props

  return (
    <Helmet
      htmlAttributes={{ lang: lang }}
      title={defaultTitle}
      titleTemplate={`%s - ${title}`}
    >
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={domain} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: ['Data Science','Product Management', 'Engineering', 'Software Development', 'Consulting']
}
