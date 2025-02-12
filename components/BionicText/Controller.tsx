"use client";

import React, { useState } from "react";
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";
import bionicConvert from "@/lib/bionicTextConverter";
import { toast } from "@/hooks/use-toast";

const BionicController = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState<string>("");
  const [boldLength, setBoldLength] = useState(3);
  const [fontSize, setFontSize] = useState(16);

  const convertToBionic = (): void => {
    setOutputText(bionicConvert(inputText, boldLength));

    toast({ description: "Converted successfully!", duration: 700 });
  };

  return (
    <div className="px-6 py-4 flex justify-center gap-4">
      <TextInput
        inputText={inputText}
        setInputText={setInputText}
        convert={convertToBionic}
        boldLength={boldLength}
        setBoldLength={setBoldLength}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <TextOutput outputText={outputText} fontSize={fontSize} />
    </div>
  );
};

export default BionicController;
