import { Countdown, Scountdown } from "styles/components/ui/countdown";
import React from 'react';
function CountdownStatistic() {
    return (

        <div>
            <h1>Countdown</h1>
            <Scountdown />
            <br />
            <h1>Day Level</h1>
            <Countdown />
        </div>
    );
}

export default CountdownStatistic;

