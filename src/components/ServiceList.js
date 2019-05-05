/**
 * @prettier
 * @description: ServiceList component
 * @copyright (c) 2018 - present, HGC AB.
 * @licence This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import { Link } from 'gatsby'

// material-ui
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import useServices from './useServices'

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
 * ServiceList component
 * @param props
 * @returns {*}
 * @constructor
 */
function ServiceList(props) {
  const { classes } = props
  const services = useServices()

  return (
    <Grid spacing={24} container justify="center">
      {services.map(edge => {
        const {
          node: {
            excerpt,
            frontmatter: { path, title, imageURL }
          }
        } = edge


        return (
          <Grid item xs={12} md={4} key={title}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia image={imageURL.publicURL} className={classes.cardMedia} />
                <CardContent>
                  <Typography gutterBottom variant="h6" className={classes.titleText}>
                    {title}
                  </Typography>
                  <Typography variant="body2">{excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button component={Link} to={path} state={{modal: false}}  size="small" color="primary">
                  Read more ...
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default withStyles(styles)(ServiceList)
