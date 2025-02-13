"use client";

import React from "react";
import TextInput from "./TextInput";
import TextOutput from "./TextOutput";

const BionicController = () => {
  return (
    <div className="px-6 py-4 flex justify-center gap-4">
      <TextInput />
      <TextOutput />
    </div>
  );
};

export default BionicController;
