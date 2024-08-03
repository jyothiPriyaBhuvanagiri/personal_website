import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../asset/CV.pdf";

// Set the correct workerSrc path for pdfjs to the local path
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

export const Resume = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div id="resume">
            <Container fluid className="resume-section">
                <Row>
                    <Button>
                        <AiOutlineDownload />
                        Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    <Document file={pdf} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>
            </Container>
        </div>
    );
};
