import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface FileInputProps {
  pdfFile: File | null;
  setPdfFile: (pdfFile: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ pdfFile, setPdfFile }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setPdfFile(file);
  };

  return (
    <div className="max-w-80">
      <Label htmlFor="pdf-upload">Upload a PDF</Label>
      <Input
        type="file"
        accept="application/pdf"
        id="pdf-upload"
        onChange={handleFileChange}
      />
      <Label>Uploaded file: {pdfFile && pdfFile.name}</Label>
    </div>
  );
};

export default FileInput;
