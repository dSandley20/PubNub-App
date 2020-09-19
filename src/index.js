import React from "react"
import ReactDOM from "react-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider } from "@material-ui/core/styles"
import App from "components/App"
import theme from "./themes/main"
import { Provider } from "react-redux"
import store from "store"
import { BrowserRouter } from "react-router-dom"

import "./styles/base.css"

const Application = (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(Application, document.getElementById("root"))
