import React from 'react';
import './Button.css';


export default function ActionButton({text, buttonStyle}) {
    return <button className= {buttonStyle}>{text}</button>
}