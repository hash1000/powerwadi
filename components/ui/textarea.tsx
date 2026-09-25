import * as React from "react";
import { cn } from "@/lib/utils";
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => <textarea ref={ref} className={cn("mt-2 min-h-32 w-full resize-y border border-[#dfe4e9] bg-white px-4 py-3 text-sm text-[#0a1628] outline-none transition placeholder:text-[#8e9aaa] focus:border-[#d7a84c]", className)} {...props} />);
Textarea.displayName = "Textarea";