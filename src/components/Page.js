/**
 * @prettier
 * @description: Hook to use site meta data
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'

// material-ui

import Grid from '@material-ui/core/Grid'

/**
 * Page component
 * @returns {*}
 * @constructor
 */
function Page(props) {
  const { children } = props

  return (
      <Grid container justify="center" alignItems="stretch">
        <Grid item xs>
          {children}
        </Grid>
      </Grid>

  )
}

export default Page
