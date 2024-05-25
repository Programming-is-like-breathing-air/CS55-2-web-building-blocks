import * as React from 'react';
import { Timeline, TimelineItem } from "@/components/ui/timeline";

const TimelinePage = () => {
    const steps = [
        { label: 'Think' },
        { label: 'Design' },
        { label: 'Code' },
        { label: 'Deploy' },
    ];

    return (
        <div>
            <h1>Development Process</h1>
            <Timeline>
                {steps.map((step, index) => (
                    <TimelineItem key={index} label={step.label} />
                ))}
            </Timeline>
        </div>
    );
};

export default TimelinePage;
