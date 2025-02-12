"use client";

import React, { useState } from "react";
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";
import bionicConvert from "@/lib/bionicTextConverter";

const BionicController = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState<string>("");

  const convertToBionic = (): void => {
    setOutputText(bionicConvert(inputText));
  };

  return (
    <div className="px-6 py-4 flex justify-center gap-4">
      <TextInput
        inputText={inputText}
        setInputText={setInputText}
        convert={convertToBionic}
      />
      <TextOutput outputText={outputText} />
    </div>
  );
};

export default BionicController;
