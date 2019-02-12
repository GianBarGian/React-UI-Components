import React from 'react';
import './Header.css';

export default function HeaderTitle() {
    return (
        <div className= "header-title">
            <h1>Lambda School</h1>
            <p>@LambdaSchool</p>
            <p>{new Date().toString()}</p>
        </div>    
    )
}

