import React from 'react';
import './Header.css';

export default function HeaderTitle() {
    const newDate = new Date();
    return (
        [
            <h1>Lambda School</h1>,
            <p>@LambdaSchool</p>,
            <p>{newDate.toString()}</p>,
        ]
    )
}

