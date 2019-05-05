/**
 * @prettier
 * @description: TabContent component renders children to the TabNavigator component
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 3
  }
})

/**
 * TabContent component
 * @param classes
 * @param children
 * @param dir
 * @returns {*}
 * @constructor
 */
function TabContainer({ classes, children, dir }) {
  return (
    <Typography className={classes.root} component="div" dir={dir}>
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
}

export default withStyles(styles)(TabContainer)
