
import { useEffect, useState } from 'react';
import { Button } from "../../../../../styles/components/ui/button";
import {
    Tooltip,
    BottomTooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../../../../../styles/components/ui/tooltip"

export function AnimatedTooltip() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100毫秒后显示工具提示，确保是在 DOM 更新之后

    return () => clearTimeout(timer);
  }, []);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <BottomTooltipContent className={`fade-in-tooltip ${isVisible ? 'visible' : ''}`}>
          <p>Add to library</p>
        </BottomTooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default AnimatedTooltip;
