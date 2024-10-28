import { cn } from "@/lib/utils";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CheckCircle } from "lucide-react";
import React from "react";

interface FormStatusProps {
  message?: string;
  variant?: "error" | "success";
}

export const FormStatus = ({
  message,
  variant = "success",
}: FormStatusProps) => {
  if (!message) return null;
  return (
    <div
      className={cn(
        "p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500 bg-emerald-500/15",
        variant === "error" && "bg-destructive/15 text-destructive"
      )}
    >
      {variant === "error" && <ExclamationTriangleIcon className="size-4" />}
      {variant === "success" && <CheckCircle className="size-4" />}
      <p>{message}</p>
    </div>
  );
};
