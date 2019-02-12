import React from 'react';
import './Button.css';

export default function NumberButton({text, buttonStyle}) {
    return <button className= {buttonStyle}>{text}</button>
}