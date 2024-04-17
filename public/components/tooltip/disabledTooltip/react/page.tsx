import React, { useState } from 'react';
import { Button } from "../../../../../styles/components/ui/button";
import {
    Tooltip,
    BottomTooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../../../../../styles/components/ui/tooltip"

export function DisableTooltip() {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenChange = (open) => {
        setIsOpen(open);
        if (open) {
            console.log("Disabled Tooltip is now visible");
        }
    };

    return (
        <TooltipProvider>
            <Tooltip onOpenChange={handleOpenChange}>
                <TooltipTrigger asChild>
                    <Button variant="outline" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                        Hover
                    </Button>
                </TooltipTrigger>
                <BottomTooltipContent>
                    <p>Disabled Tooltip</p>
                </BottomTooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default DisableTooltip;
