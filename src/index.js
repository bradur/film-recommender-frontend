import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import BootstrapProvider from '@bootstrap-styled/provider'

ReactDOM.render(
  <BootstrapProvider>
    <App />
  </BootstrapProvider>,
  document.getElementById("root")
)
