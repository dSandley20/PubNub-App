import React, { Component } from "react"
import { withRouter } from "react-router"
import { withStyles } from "@material-ui/core/styles"
import withWidth from "@material-ui/core/withWidth"
import styles from "./styles"
import { connect } from "react-redux"
import { compose } from "recompose"
import Snackbar from "@material-ui/core/Snackbar"
import { closeSnackBar } from "../../actions/snack-bar"
import Router, { routeConfig } from "router"

class App extends Component {
  render() {
    const { classes } = this.props
    const snackBarOrigin =
      this.props.width === "sm" || this.props.width === "xs" ?
        { vertical: "bottom", horizontal: "left" } :
        { vertical: "bottom", horizontal: "left" }
    return (
      <div className={classes.app}>
        <Router routes={routeConfig} />
        <div id="dialog-holder">
          {/* LEAVE THIS IN PLACE FOR DIALOGS TO POPULATE INTO */}
        </div>
        <Snackbar
          anchorOrigin={snackBarOrigin}
          open={this.props.snackBar.open}
          onClose={() => this.props.dispatch(closeSnackBar())}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          autoHideDuration={this.props.snackBar.autoHideDuration}
          message={<span id="message-id">{this.props.snackBar.message}</span>}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    snackBar: state.snackBar
  }
}

export default withRouter(
  compose(connect(mapStateToProps), withStyles(styles), withWidth())(App)
)
