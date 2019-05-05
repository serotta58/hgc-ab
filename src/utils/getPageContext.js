/**
 * @prettier
 * @description: Get page context module
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @see https://github.com/mui-org/material-ui/tree/master/examples/gatsby
 */
import { SheetsRegistry } from 'jss'
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'

import indigo from '@material-ui/core/colors/indigo'
import deepOrange from '@material-ui/core/colors/deepOrange'

/**
 * Create a theme with a custom primary and secondary color
 * @type {Theme}
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      light: indigo[400],
      main: indigo[500],
      dark: indigo[700]
    },
    secondary: {
      light: deepOrange[300],
      main: deepOrange[500],
      dark: deepOrange[700]
    }
  },
  typography: {
    useNextVariants: true
  }
})

/**
 * Create material-ui context
 */
function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  }
}

/**
 * Get the page context
 */
export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}
