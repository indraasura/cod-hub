import React, { Component } from "react";
import Calculator from "./components/SensitivityCalculator";


class App extends Component {
  state = {
    standardSensitivity: 0,
  };

  handleSensitivityChange = (e) => {
    this.setState({
      standardSensitivity: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Calculator 
        standardSensitivity={this.state.standardSensitivity}
        handleSensitivityChange={this.handleSensitivityChange}
        />
      </div>
    );
  }
}

export default App;
