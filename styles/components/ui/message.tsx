import * as React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const messageVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        information:  
          "border-blue-500/50 text-blue-500 dark:border-blue-500 [&>svg]:text-blue-500",
        warning:
          "border-yellow-500/50 text-yellow-500 dark:border-yellow-500 [&>svg]:text-yellow-500",
        success:
          "border-green-500/50 text-green-500 dark:border-green-500 [&>svg]:text-green-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Message = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof messageVariants> & { onToggleModal: () => void }
>(({ className, variant, onToggleModal, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(messageVariants({ variant }), className)}
      {...props}
    >
      <button
        onClick={onToggleModal}
        className="absolute right-4 top-4 p-1"
        aria-label="Toggle modal"
      >
        ⬤
      </button>
      {props.children}
    </div>
  );
})
Message.displayName = "Message";

const MessageModal = ({ isOpen, onClose, children }) => (
  isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-4">
      <div className="bg-white p-4 rounded-lg max-w-sm mx-auto">
        {children}
        <button onClick={onClose} className="absolute top-1 right-1 text-lg">✖</button>
      </div>
    </div>
  ) : null
);

const MessageTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
MessageTitle.displayName = "MessageTitle";

const MessageDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
MessageDescription.displayName = "MessageDescription";

export { Message, MessageModal, MessageTitle, MessageDescription };
