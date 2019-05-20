import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class CanvasExample extends React.Component {
  render() {
    const size = this.props.size;
    return (
      <canvas
        style={{ border: "5px solid deeppink" }}
        width={size}
        height={size}
      />
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>Canvas</h1>
      <CanvasExample size={300} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
