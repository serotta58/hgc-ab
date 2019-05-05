/**
 * @prettier
 * @description: TabNavigator component render tab navigation features
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { withStyles } from '@material-ui/core/styles'

// swipeable views
import SwipeableViews from 'react-swipeable-views'

// custom components
import TabContent from './TabContent'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  icon: {
    marginLeft: -12,
    marginRight: 20
  }
})

/**
 * TabNavigator component
 */
class TabNavigator extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render() {
    const { classes, theme, items } = this.props

    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          centered
        >
          {items.map(item => (
            <Tab key={item[0]} label={item[0]} />
          ))}
        </Tabs>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {items.map(item => (
            <TabContent key={item[0]} dir={theme.direction}>
              {item[1]}
            </TabContent>
          ))}
        </SwipeableViews>
      </div>
    )
  }
}

TabNavigator.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(TabNavigator)
