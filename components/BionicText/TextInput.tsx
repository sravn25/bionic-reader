"use client";

import React from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import BionicText from "./BionicText";
import Configs from "./Configs";

interface TextInputProps {
  inputText: string;
  setInputText: (inputText: string) => void;
  convert: () => void;
  boldLength: number;
  setBoldLength: (boldLength: number) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  inputText,
  setInputText,
  convert,
  boldLength,
  setBoldLength,
}) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between pb-2">
        <Label htmlFor="conversionInput" className="text-lg">
          <BionicText text="Input Text" />
        </Label>
        <Configs boldLength={boldLength} setBoldLength={setBoldLength} />
      </div>
      <Textarea
        value={inputText}
        placeholder="Insert your text for conversion here."
        id="conversionInput"
        className="resize-none h-64 "
        onChange={handleTextChange}
      />
      <div className="flex justify-between mt-2">
        <Label className="text-sm text-gray-500">
          <BionicText text={`${inputText.length} characters`} />
        </Label>
        <Button
          onClick={() => {
            convert();
          }}
          disabled={!inputText}
          className="bg-green-600 hover:bg-green-700"
        >
          <BionicText text="Convert" />
        </Button>
      </div>
    </div>
  );
};

export default TextInput;
