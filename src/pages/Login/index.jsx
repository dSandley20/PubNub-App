import React, { Component, Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import styles from "./styles"
import { Typography, Button } from "@material-ui/core"
import { Link } from "react-router-dom"

class Index extends Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Typography variant="h1">
          You Made it to the Login page
        </Typography>
        <Button variant="outlined" component={Link} to="/">
          Back to Index
        </Button>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Index)
