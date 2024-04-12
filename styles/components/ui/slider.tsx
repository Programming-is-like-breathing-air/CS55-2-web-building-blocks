import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  // 添加一个状态来跟踪滑块的值
  const [value, setValue] = React.useState(props.defaultValue || [0]);

  // 处理滑块值变化的事件
  const handleValueChange = (value) => {
    console.log("Current Slider Value:", value[0]); // 输出当前的滑块数值到控制台
    setValue(value); // 更新状态
  };

  // 处理滑块拖动结束的事件
  const handleDragEnd = () => {
    console.log("Final Slider Value:", value[0]); // 当拖动结束时，输出最终的滑块数值到控制台
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex touch-none select-none items-center",
          className
        )}
        style={{ width: '500px' }} // 设置滑块的宽度为父容器的50%
        onValueChange={handleValueChange} // 设置值变化事件处理函数
        onMouseUp={handleDragEnd} // 设置鼠标松开事件处理函数
        onTouchEnd={handleDragEnd} // 设置触摸结束事件处理函数
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-300">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
    </div>
  );
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
