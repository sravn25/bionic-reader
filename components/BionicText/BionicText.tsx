import bionicConvert from "@/lib/bionicTextConverter";
import React from "react";

interface BionicTextProps {
  text: string;
  boldLength?: number;
}

const BionicText = ({ text, boldLength = 3 }: BionicTextProps) => {
  const formattedText = bionicConvert(text, boldLength);

  return <div dangerouslySetInnerHTML={{ __html: formattedText }}></div>;
};

export default BionicText;
