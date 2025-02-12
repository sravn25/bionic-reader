"use client";

import React from "react";

import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { CodeXml, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";
import BionicText from "./BionicText";

interface TextOutputProps {
  outputText: string;
}

const TextOutput: React.FC<TextOutputProps> = ({ outputText }) => {
  const handleCopyHTML = () => {
    navigator.clipboard.writeText(outputText).then(() =>
      toast({
        description: "Copied as HTML!",
      }),
    );
  };

  const handleCopyText = async () => {
    try {
      // Wrap the output text in a proper HTML document structure
      const htmlContent = `<html><body>${outputText}</body></html>`;

      // Create a ClipboardItem with formatted text
      const blob = new Blob([htmlContent], { type: "text/html" });
      const clipboardItem = new ClipboardItem({ "text/html": blob });

      // Write to clipboard
      await navigator.clipboard.write([clipboardItem]);

      //alert("Copied with formatting! Try pasting in Word, Gmail, or Notion.");
      toast({
        title: "Copied with formatting!",
        description: "Try pasting in Word, Gmail, or Notion.",
      });
    } catch (err) {
      console.error("Failed to copy:", err);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed to copy.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between pb-2">
        <Label htmlFor="conversionOutput" className="text-lg">
          <BionicText text="Output Text" />
        </Label>
        <div className="gap-0.5 flex justify-end">
          <Button
            onClick={handleCopyHTML}
            disabled={!outputText}
            variant="ghost"
            className="border"
          >
            <CodeXml />
          </Button>
          <Button
            onClick={handleCopyText}
            disabled={!outputText}
            variant="ghost"
            className="border"
          >
            <Copy />
          </Button>
        </div>
      </div>
      <div
        id="conversionOutput"
        className="w-full border rounded-md p-2 h-64 overflow-y-auto bg-background text-foreground"
        dangerouslySetInnerHTML={{ __html: outputText }}
      />
    </div>
  );
};

export default TextOutput;
