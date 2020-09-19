import React, { Component, Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import styles from "./styles"
import Typography from "@material-ui/core/Typography"
import NotFoundGif from "../../assets/404.gif"

class NotFound extends Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <section className={classes.notFound}>
          <div className={classes.leftSection}>
            <div className={classes.text}>
              <Typography variant="h2" className={classes.display}>
                Looks like you got lost
              </Typography>
              <Typography variant="subtitle1">
                Sorry about that, check the URL and make sure you didn't make a
                mistake, or refresh and try again
              </Typography>
            </div>
          </div>
          <div className={classes.rightSection}>
            <img
              src={NotFoundGif}
              alt="Not Found"
              className={classes.notFoundGif}
            />
          </div>
        </section>
      </Fragment>
    )
  }
}

export default withStyles(styles)(NotFound)
