import React from "react";
import ReactDOM from "react-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import { colourOptions } from "./docs/data";

import "./ui/styles.css";
import "./ui/Typeahead.css";
import "./ui/dropdown.less";


// const Menu = props => (
//   <div className="dropdown-menu">{props.children}</div>
// );

// const MenuList = props => (
//   <div className="widget-dropdown-type-ahead-menu-list">{props.children}</div>
// );

function App() {
  return (
    <div className="App">
      <h1>react-bootstrap-typeahead test</h1>
      <div className= "container">
        <Typeahead
          labelKey="label"
          clearButton={true}
          multiple={false}
          options={colourOptions}
          placeholder="Choose a color.."
          // renderMenu = { Menu }
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
