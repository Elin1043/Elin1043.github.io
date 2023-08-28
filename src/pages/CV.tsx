import { Document, Page, pdfjs } from "react-pdf";
import cvPDF from "../assets/cv.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button, Container, Typography, useTheme } from "@mui/material";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type CVProps = {};

function CV(props: CVProps) {
  const theme = useTheme();
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = "Elin Forsberg CV";
    link.href = cvPDF;
    link.click();
  };
  return (
    <Container sx={{ textAlign: "center" }}>
      <Button
        onClick={onDownload}
        variant="contained"
        sx={{
          marginBottom: "10px",
          color: "#FFF",
          backgroundColor: (theme) => theme.palette.secondary.main,
        }}
      >
        <Typography variant="body1">Download CV</Typography>
      </Button>
      <Document file={cvPDF}>
        <Page pageNumber={1} />
      </Document>
    </Container>
  );
}

export default CV;
