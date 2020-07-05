import React, { Component } from "react";
import "../static/css/sensitivityCalculator.css";

class Calculator extends Component {
  render() {
    const sensitivityValues =
      this.props.standardSensitivity === 0 ? (
        <div></div>
      ) : (
        <div className="count-values">
          <h3>Firing Sensitivity: </h3>
          <p>{this.props.standardSensitivity * 2}</p>
          <br />
          <h3>Gyro Sensitivity: </h3>
          <p>{this.props.standardSensitivity * 0.75}</p>
          <br />
          <h3>Sinper Sensitivity: </h3>
          <p>{this.props.standardSensitivity * 1.5}</p>
          <br />
          <h3>XYZ Sensitivity: </h3>
          <p>{this.props.standardSensitivity * 1.25}</p>
        </div>
      );
    return (
      <div className="calculator">
        <div className="container">
          <div className="value-container">
            <form>
              <label>Standard Sensitivity</label>
              <br/><br/>
              <input
                type="text"
                onChange={this.props.handleSensitivityChange}
                value={this.props.standardSensitivity}
              />
              <hr />
            </form>
            <br />
            {sensitivityValues}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
