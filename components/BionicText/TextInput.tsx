"use client";

import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import BionicText from "./BionicText";

interface TextInputProps {
  inputText: string;
  setInputText: (inputText: string) => void;
  convert: () => void;
}

const TextInput: React.FC<TextInputProps> = ({
  inputText,
  setInputText,
  convert,
}) => {
  const [converted, setConverted] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    setConverted(false);
  };

  return (
    <div className="w-full">
      <Label htmlFor="conversionInput" className="text-lg">
        Input Text
      </Label>
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
            setConverted(true);
          }}
          disabled={converted || !inputText}
          className="bg-green-600 hover:bg-green-700"
        >
          <BionicText text="Convert" />
        </Button>
      </div>
    </div>
  );
};

export default TextInput;
