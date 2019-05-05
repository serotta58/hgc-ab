import React from "react";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Link from '@material-ui/core/Link'
import { GithubCircle } from "mdi-material-ui";
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  footer: {
    textAlign: 'center',
    padding: theme.spacing.unit * 2,
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.dark,
    width: '100%',
    minHeight: '56px',
    position: 'fixed',
    bottom: 0,
  },
})

function CopyRight({company, email}) {
  return(
    <Typography variant="caption" component={'div'}>
      ©{new Date().getFullYear()} {company}{" Email: "}{email}
    </Typography>
  )
}

function GitHubLink() {
  return(
    <IconButton
      component={Link}
      href="https://github.com/foxandgeese/tiny-agency"
      target="_blank"
      rel="noopener noreferrer"
      disableTouchRipple={true}
    >
      <GithubCircle />
    </IconButton>
  )
}

const Footer = ({classes, company, email}) => {
  return (
    <footer className={classes.footer} >
      <CopyRight company={company} email={email}/>
    </footer>
  );
}


export default withStyles(styles)(Footer)
