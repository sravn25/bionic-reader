//import { getDocument } from "pdfjs-dist";
import bionicConvert from "./bionicTextConverter";

const extractPdfText = async (arrayBuffer: ArrayBuffer): Promise<string> => {
  //const pdf = await getDocument(arrayBuffer).promise;
  let fullText = "";
  /*

  for (let i = 0; i < pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items
      .map((item) => ("str" in item ? item.str : ""))
      .join(" ");
    fullText += pageText + "\n\n";
  }
    */

  return bionicConvert(fullText);
};

export default extractPdfText;
