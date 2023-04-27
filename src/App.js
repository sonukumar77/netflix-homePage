import "./styles.css";
import { Component } from "react";
import Counter from "./components/Counter";
import Netflix from "./components/Netflix";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <Netflix />
      </div>
    );
  }
}

export default App;
