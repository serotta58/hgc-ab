/**
 * @prettier
 * @description: ArticleList component
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import { Link } from 'gatsby'

// material-ui
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import useArticles from './useArticles'

const styles = theme => ({
  grid: {
    height: '100%'
  },
  card: {
    height: '100%'
  },
  cardMedia: {
    height: '150px'
  },
  titleText: {
    textAlign: 'center'
  },
  imageLink: {
    border: 0,
    width: '80%',
    paddingTop: '40px',
    paddingBottom: '20px'
  }
})

/**
 * ArticleList component
 * @param props
 * @returns {*}
 * @constructor
 */
function ArticleList(props) {
  const { classes } = props
  const articles = useArticles()

  return (
    <Grid spacing={24} container justify="center">
      {articles.map(edge => {
        const {
          node: {
            excerpt,
            frontmatter: { path, title, imageURL }
          }
        } = edge

        console.log('publicURL', imageURL)

        return (
          <Grid item xs={12} md={4} key={title}>
            <Card className={classes.card}>
              <CardMedia image={imageURL} className={classes.cardMedia} />
              <CardContent>
                <Typography gutterBottom variant="h6" className={classes.titleText}>
                  <Link
                    to={path}
                    state={{ modal: true }}
                  >
                    {title}
                  </Link>
                </Typography>
                <Typography variant="body2">{excerpt}</Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default withStyles(styles)(ArticleList)
