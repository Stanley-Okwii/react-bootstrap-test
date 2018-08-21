import React from "react";
import ReactDOM from "react-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import { colourOptions } from "../src/Data/Data";

import "./ui/styles.css";
import "./ui/Typeahead.css";
import "./ui/dropdown.less";

function App() {
  return (
    <div>
      <h1 className="App">react-bootstrap-typeahead test</h1>
      <div>
        <Typeahead
          labelKey="label"
          // clearButton={true}
          multiple={false}
          options={colourOptions}
          placeholder="Choose a color.."
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
