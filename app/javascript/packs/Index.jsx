// Run this example by adding <%= javascript_pack_tag "hello_react" %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import { render } from "react-dom";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";

import { Provider } from "react-redux";
import App from "../components/App";
import store from "../store";

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.body.appendChild(document.createElement("div")),
  )
})
