import * as React from "react";
import ReactClipboard from "react-clipboard.js";
import { render } from "react-dom";

const onClick = (e: ClipboardJS.Event) => console.log(e.text);

render(
  <ReactClipboard
    data-clipboard-text="Hello, friend, miss me?" // Typescript ignores hypen-containing properties
    onClick={onClick}
    className="ms-clippy"
  />,
  document.querySelector("#creed-thoughts")
);
