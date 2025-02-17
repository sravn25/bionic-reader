"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import extractPdfText from "@/lib/pdfParser";

interface PdfParserProps {
  pdfFile: File | null;
}

const PdfParser: React.FC<PdfParserProps> = ({ pdfFile }) => {
  const [resText, setResText] = useState("");
  const [loading, setLoading] = useState(false);

  if (!pdfFile) return;

  const handlePdfParse = async () => {
    try {
      setLoading(true);
      const arrayBuffer = await pdfFile.arrayBuffer();
      const text = await extractPdfText(arrayBuffer);
      setResText(text);
    } catch (error) {
      console.error("Error processing PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={handlePdfParse} disabled={!pdfFile || loading}>
        Extract Text
      </Button>
      <div>{resText}</div>
    </div>
  );
};

export default PdfParser;
