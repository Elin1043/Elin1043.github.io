import { Document, Page, pdfjs } from "react-pdf";
import samplePDF from "../assets/cv.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type CVProps = {};

function CV(props: CVProps) {
  return (
    <Document file={samplePDF}>
      <Page pageNumber={1} />
    </Document>
  );
}

export default CV;
