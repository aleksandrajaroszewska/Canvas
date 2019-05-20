import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class CanvasExample extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef;
  }
  draw() {
    const ctx = this.canvas.current.getContext("2d");
    const size = this.props;
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = "rgba(0, 150, 0, 0.3)";
    ctx.fillRect(30, 30, 150, 150);
  }
  componentDidMount() {
    this.draw();
  }
  render() {
    const size = this.props.size;

    return (
      <canvas
        ref={this.canvas}
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
