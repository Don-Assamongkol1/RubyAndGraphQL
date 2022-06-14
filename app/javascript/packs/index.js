import React from "react";
import { render } from "react-dom";
import Provider from "../components/Provider";
import Library from "../components/Library";

console.log("smelly poo")
render(
  <Provider>
    <Library />
  </Provider>,
  document.querySelector("#root")
);
