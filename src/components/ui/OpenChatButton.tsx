"use client";

import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

export function OpenChatButton({
  children,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <Button
      type="button"
      onClick={(event) => {
        window.dispatchEvent(new CustomEvent("jadai:open-chat"));
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
