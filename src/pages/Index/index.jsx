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
        <Typography variant="h4">
          This is the generated index page
        </Typography>
        <Button variant="outlined" component={Link} to="/login">
          Check Out The Login Page
        </Button>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Index)
