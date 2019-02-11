import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

export default function CardContainer() {
    return (
        <a className="card-container" href="https://www.reactjs.org">
            <CardBanner />
            <CardContent />
        </a>
    )
}