import * as React from "react";
import { cn } from "@/lib/utils";
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => <input ref={ref} className={cn("mt-2 h-12 w-full border border-[#dfe4e9] bg-white px-4 text-sm text-[#0a1628] outline-none transition placeholder:text-[#8e9aaa] focus:border-[#d7a84c]", className)} {...props} />);
Input.displayName = "Input";