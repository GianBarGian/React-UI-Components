import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumbersContainer from './components/containerComponent/NumbersContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperationContainer from './components/containerComponent/OperationContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: 0,
      result: 0,
      operation: null,
    };

    this.pushButton = this.pushButton.bind(this);
  }

  updateCurrentValue(newValue) {
    this.state.currentValue === 0
    ? this.setState({
      currentValue: newValue,
    })
    : this.setState({
      currentValue: parseInt(`${this.state.currentValue}${newValue}`,10),
    })
  }

  updateOperation(operation) {
    this.setState({
      operation: operation,
    })
  }

  updateResult(currentValue) {
    this.setState({
      result: currentValue,
      currentValue: 0,
    })
  }

  calculate(operation) {
    if (operation === "+") {
      this.setState({
        result: this.state.currentValue + this.state.result
      })
    } else if (operation === "-") {
      this.setState({
        result: this.state.currentValue - this.state.result
      })
      } else if (operation === "*") {
      this.setState({
        result: this.state.currentValue * this.state.result
      })
      } else if (operation === "/") {
      this.setState({
        result: this.state.currentValue / this.state.result
      })
      }
    
  }

  pushButton(button) {
    if (button === "+" || button === "-" || button === "*" || button === "/") { 
      console.log('ya')
        this.updateOperation(button);
      } else if (button === "=") {
        this.calculate();
      } else {
        if (!this.state.operation) {
          console.log("yo");
          this.updateCurrentValue(button);
        } else {
          this.updateResult(this.state.currentValue);
          this.updateCurrentValue(button);
        }
      }
  }
  render() {
    const { currentValue, result, operation } = this.state;
  
    return (
      <div className="container">
        <CalculatorDisplay result={result} />
        <div className="controller">
          <div className="left-part-calculator">
            <ActionButton text="clear" buttonStyle="actionButton" />
            <NumbersContainer pushButton={this.pushButton.bind(this)} />
            <ActionButton text="0" buttonStyle="actionButton" />
          </div>
          <OperationContainer />
        </div>
      </div>
    );
  };
}




 
