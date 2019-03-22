import React from 'react';
import './Button.css';


export default function NumberButton({text, buttonStyle, onClick}) {
    console.log(onClick);
    return <button onClick={() => onClick(text)} className= {buttonStyle}>{text}</button>
}