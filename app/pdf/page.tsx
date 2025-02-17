"use client";

import { useState } from "react";
import Navbar from "@/components/Header/navbar";
import About from "@/components/Footer/about";
import FileInput from "@/components/PDF/FileInput";
import PdfParser from "@/components/PDF/Parser";

const Page = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">
          Upload PDF for Bionic Reading
        </h1>
        <div className="mb-4">
          <FileInput pdfFile={pdfFile} setPdfFile={setPdfFile} />
        </div>
        <PdfParser pdfFile={pdfFile} />
      </div>
      <About />
    </div>
  );
};

export default Page;
