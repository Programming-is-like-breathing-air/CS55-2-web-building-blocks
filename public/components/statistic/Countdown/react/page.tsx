import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "styles/components/ui/card"; // Importing your custom Card components
import { Countdown, Scountdown } from "styles/components/ui/countdown";

function CountdownStatistic() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Countdown</CardTitle>
            </CardHeader>
            <CardContent>
                <Scountdown />
                <div style={{ marginTop: '30px' }}>
                    <CardTitle>Day Level</CardTitle>
                    <Countdown />
                </div>
            </CardContent>
        </Card>
    );
}

export default CountdownStatistic;
