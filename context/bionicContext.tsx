"use client";

import React, { createContext, useContext, useState } from "react";
import bionicConvert from "@/lib/bionicTextConverter";
import { toast } from "@/hooks/use-toast";

interface BionicContextType {
  inputText: string;
  setInputText: (inputText: string) => void;
  outputText: string;
  boldLength: number;
  setBoldLength: (boldLength: number) => void;
  fontSize: number;
  setFontSize: (fontSize: number) => void;
  convertToBionic: () => void;
}

const BionicContext = createContext<BionicContextType | undefined>(undefined);

export const BionicProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState<string>("");
  const [boldLength, setBoldLength] = useState(3);
  const [fontSize, setFontSize] = useState(16);

  const convertToBionic = (): void => {
    setOutputText(bionicConvert(inputText, boldLength));
    toast({ description: "Converted successfully!", duration: 700 });
  };

  return (
    <BionicContext.Provider
      value={{
        inputText,
        setInputText,
        outputText,
        convertToBionic,
        boldLength,
        setBoldLength,
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </BionicContext.Provider>
  );
};

export const useBionic = () => {
  const context = useContext(BionicContext);
  if (!context) {
    throw new Error("useBionic must be used within a bionic provider");
  }
  return context;
};
