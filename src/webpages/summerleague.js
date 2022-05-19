//file: src/webpages/summerleague.js
import React, { useEffect } from 'react';
const SummerLeague = () => {
    useEffect(() => {
        document.title = 'Summer League';
    },[]);
    return (
        <div>
            <h1>Sumnam Sport</h1>
            <p>Sumnam Summer League</p>
        </div>
    );
};
export default SummerLeague;