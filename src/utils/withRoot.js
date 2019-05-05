/**
 * @prettier
 * @description: Higher order function to inject material-ui in pages
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @see https://github.com/mui-org/material-ui/tree/master/examples/gatsby
 */
import React from 'react'

// material-ui
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import Hidden from '@material-ui/core/Hidden'

// Get page context
import getPageContext from './getPageContext'

/**
 * Higher order function to inject material ui onto the root of pages
 * @param Component
 * @returns {WithRoot}
 */
function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props)
      this.muiPageContext = getPageContext()
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      return (
        <JssProvider generateClassName={this.muiPageContext.generateClassName}>
          {/* MuiThemeProvider makes the theme available down the React tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.muiPageContext.theme}
            sheetsManager={this.muiPageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Hidden implementation="css">
              <Component {...this.props} />
            </Hidden>
          </MuiThemeProvider>
        </JssProvider>
      )
    }
  }

  return WithRoot
}

export default withRoot
