import * as React from "react";
import { cn } from "@/lib/utils";

interface TimelineContextValue {
  orientation?: "horizontal" | "vertical";
  currentStep?: number;
}

const TimelineContext = React.createContext<TimelineContextValue>({});

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  defaultValue?: number;
}

export function Timeline({
  orientation = "horizontal",
  defaultValue = 1,
  className,
  children,
  ...props
}: TimelineProps) {
  return (
    <TimelineContext.Provider value={{ orientation, currentStep: defaultValue }}>
      <div
        className={cn(
          "relative flex",
          orientation === "horizontal"
            ? "flex-col md:flex-row w-full items-start justify-between"
            : "flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </TimelineContext.Provider>
  );
}

export interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  step: number;
}

export function TimelineItem({
  step,
  className,
  children,
  ...props
}: TimelineItemProps) {
  return (
    <div
      className={cn(
        "group relative flex-1 flex flex-col justify-start",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function TimelineHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative flex items-center mb-3 w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function TimelineSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-white/10 group-first:left-1/2 group-last:right-1/2 z-0",
        className
      )}
      {...props}
    />
  );
}

export function TimelineIndicator({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0a0f] border-2 border-white/20 text-xs font-mono font-bold text-gray-300 group-hover:border-[#E57A00] group-hover:text-[#FFA439] group-hover:shadow-[0_0_15px_rgba(229,122,0,0.5)] transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function TimelineDate({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-xs font-mono font-bold text-[#E57A00] mb-1", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function TimelineTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "text-sm sm:text-base font-bold text-white tracking-tight mb-1 font-royal",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function TimelineContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-xs text-gray-300 leading-relaxed", className)}
      {...props}
    >
      {children}
    </div>
  );
}
