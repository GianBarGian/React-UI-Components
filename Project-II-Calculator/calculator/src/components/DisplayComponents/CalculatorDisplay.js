import React from 'react';
import './Display.css';

export default function CalculatorDisplay({result}) {
    return <p className="calculator-display">{result}</p>
}