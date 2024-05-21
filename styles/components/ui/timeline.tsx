// TimelineItem.tsx

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from "lucide-react";

interface TimelineProps extends VariantProps<typeof timelineStyles> {
    children?: React.ReactNode;
}

interface TimelineItemProps extends VariantProps<typeof itemStyles> {
    label: string;
    asChild?: boolean;
    isLast?: boolean;
    inProgress?: boolean;
    status?: 'completed' | 'inProgress' | 'pending';
}

const timelineStyles = cva(['flex', 'flex-col', 'items-start', 'relative', 'pl-6'], {
    variants: {}
});

const itemStyles = cva(['text-sm', 'flex', 'items-center', 'gap-2', 'relative', 'pt-4']);

const dotStyles = cva(['w-4', 'h-4', 'rounded-full', 'border-2', 'border-gray-400', 'relative'], {
    variants: {
        status: {
            completed: 'bg-green-300',
            inProgress: 'bg-yellow-300',
            pending: 'bg-gray-100'
        }
    }
});

const Timeline: React.FC<TimelineProps> = ({ children }) => {
    const childrenArray = React.Children.toArray(children);
    const lastIndex = childrenArray.length - 1;

    return (
        <div className={timelineStyles()}>
            {childrenArray.map((child, index) => (
                React.cloneElement(child as React.ReactElement, {
                    isLast: index === lastIndex
                })
            ))}
        </div>
    );
};

const TimelineItem: React.FC<TimelineItemProps> = ({ label, asChild, isLast, inProgress, status = 'pending' }) => {
    const Component = asChild ? Slot : 'div';
    return (
        <Component className={cn(itemStyles(), 'flex flex-row')}>
            <div className={cn(dotStyles({ status }), 'mr-2')}></div>
            {!isLast && <div className="absolute left-2 top-full w-px h-4 bg-gray-400"></div>}
            <div className="text-gray-800">{label}</div>
            {inProgress && <Loader2 className="animate-spin" />}
        </Component>
    );
};

export { Timeline, TimelineItem };
