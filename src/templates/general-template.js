/**
 * @prettier
 * @description: Template component to be used when creating pages in gatsby-node.js
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import { graphql, Link } from 'gatsby'

// Modal routing plug-in
// import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

// material-ui
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper'
// import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Page from '../components/Page'

import withRoot from '../utils/withRoot'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}


/**
 * Component that renders created pages in either a modal as a normal page
 * @param classes
 * @param data
 * @returns {*}
 * @constructor
 */
const GeneralTemplate = ({ classes, data }) => {
  const { title, imageURL } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark;

  return (
        <Page title={title}>
          <AppBar color={'secondary'} position="sticky">
            <Toolbar>
              <IconButton component={Link} to='/' color="inherit" aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>

          <Paper elevation={0}>
            <CardMedia style={{ height: '150px' }} image={imageURL.publicURL} />
            <CardContent>
              <Typography variant={'body1'} dangerouslySetInnerHTML={{ __html: html }} />
            </CardContent>
          </Paper>
        </Page>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        imageURL {
          publicURL
        }
        title
        path
      }
      html
    }
  }
`

export default withRoot(withStyles(styles)(GeneralTemplate))
