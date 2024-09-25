import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

export function GridContainer({ children, className }: GridContainerProps) {
  return (
    <div className={twMerge("w-full max-w-[77.5rem] mx-auto px-3", className)}>
      {children}
    </div>
  );
}
