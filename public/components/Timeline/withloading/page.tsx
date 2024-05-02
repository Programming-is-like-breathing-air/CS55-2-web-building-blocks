import * as React from 'react';
import { Timeline, TimelineItem } from "../../../../styles/components/ui/timeline";
import { Loader2 } from "lucide-react"; // 确保已正确导入
import { Button } from "../../../../styles/components/ui/button";

const Timelineloading = () => {
    const steps = [
        { label: 'Think', status: 'completed' as const }, // 使用 as const 以确保类型正确
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
