import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay result="0" />
      <div className="controller">
        <div className="left-part-calculator">
          <ActionButton text="clear" buttonStyle="actionButton" />
          <div className="numbers">
            <NumberButton text="7" buttonStyle="numberButton" />
            <NumberButton text="8" buttonStyle="numberButton" />
            <NumberButton text="9" buttonStyle="numberButton" />
            <NumberButton text="4" buttonStyle="numberButton" />
            <NumberButton text="5" buttonStyle="numberButton" />
            <NumberButton text="6" buttonStyle="numberButton" />
            <NumberButton text="1" buttonStyle="numberButton" />
            <NumberButton text="2" buttonStyle="numberButton" />
            <NumberButton text="3" buttonStyle="numberButton" />
          </div>
          <ActionButton text="0" buttonStyle="actionButton" />
        </div>
        <div className="operations">
          <NumberButton text="/" buttonStyle="operationButton" />
          <NumberButton text="x" buttonStyle="operationButton" />
          <NumberButton text="-" buttonStyle="operationButton" />
          <NumberButton text="+" buttonStyle="operationButton" />
          <NumberButton text="=" buttonStyle="operationButton" />
        </div>
      </div>
      
      
      
    </div>
  );
};

export default App;
