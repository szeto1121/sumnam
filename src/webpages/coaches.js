//file: src/webpages/coaches.js
import React, { useEffect } from 'react';
const Coaches = () => {
    useEffect(() => {
        document.title = 'Coaches';
    });
    return (
        <div>
            <h1>Sumnam Sport</h1>
            <p>These are our coaches...</p>
        </div>
    );
};
export default Coaches;