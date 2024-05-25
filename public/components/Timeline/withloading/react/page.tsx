import * as React from 'react';
import { Timeline, TimelineItem } from "@/components/ui/timeline";

const Timelineloading = () => {
    const steps = [
        { label: 'Think', status: 'completed' as const }, 
        { label: 'Design', status: 'completed' as const },
        { label: 'Code', inProgress: true, status: 'inProgress' as const },
        { label: 'Deploy', status: 'pending' as const },
    ];

    return (
        <div>
            <h1>Development Process</h1>
            <Timeline>
                {steps.map((step, index) => (
                    <TimelineItem key={index} label={step.label} status={step.status} inProgress={step.inProgress} />
                ))}
            </Timeline>
        </div>
    );
};

export default Timelineloading;
