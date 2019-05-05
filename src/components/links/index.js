/**
 * @prettier
 * @description: Link components to avoid property collisions
 * @author:   Henrik Grönvall
 * @version:  0.0.1
 * @copyright:  Copyright (c) 2017 HGC AB
 * @license: The MIT License (MIT)
 * @see https://material-ui.com/demos/buttons/
 */
import React from 'react'
import { Link } from 'gatsby'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

// Custom links
export const HomeLink = props => <Link to="/" {...props} />
export const CustomLink = props => (
  <Link to={props.to} style={{ color: '#fff', textDecoration: 'none' }} {...props} />
)

/**
 * Used to avoid unexpected un mounting
 * @see https://material-ui.com/guides/composition/#component-property
 */
export class ListItemLink extends React.Component {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />
  render() {
    const { icon, primary } = this.props
    return (
      <li>
        <ListItem button component={this.renderLink}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    )
  }
}
