/**
 * @prettier
 * @description: Index page
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'

// material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

// custom components
import SEO from '../components/SEO'
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'
import TabNavigator from '../components/navigation/TabNavigator'

import ServiceList from '../components/ServiceList'
import ArticleList from '../components/ArticleList'

// query hook to get sites meta data
import useMeta from '../components/useMeta'

// inject material ui HOC
import withRoot from '../utils/withRoot'

/**
 * Index component
 * @param classes
 * @returns {*}
 * @constructor
 */
function Index({ classes }) {
  const {
    domain,
    company,
    defaultTitle,
    defaultDescription,
    preamble,
    postamble,
    contact: { email }
  } = useMeta()

  return (
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs>
        <AppBar title={defaultTitle}/>

        <SEO
          title={'Home'}
          defaultTitle={defaultTitle}
          defaultDescription={defaultDescription}
          company={company}
          domain={domain}
        />

        <TabNavigator
          items={[
            ['Services', <ServiceList/>],
            ['Articles', <ArticleList />],
          ]}
        />

        <Typography paragraph gutterBottom variant="body2" component="span">
          {preamble}
        </Typography>
        <Typography paragraph gutterBottom variant="body2" component="span">
          {defaultDescription}
        </Typography>
        <Typography paragraph gutterBottom variant="body2" component="span">
          {postamble}
        </Typography>

        <Footer company={company} email={email}/>

      </Grid>
    </Grid>

  )
}

export default withRoot(Index)
