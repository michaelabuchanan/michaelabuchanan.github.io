import React, { useState } from 'react';
import { CustomNavbar } from '../components/CustomNavbar';

import { Document, Page, pdfjs } from "react-pdf";
import resume from '../pics/resume.pdf';

// React Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function About() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);

    return (
      <div className="App">

          <CustomNavbar />

          <Container fluid id="parent1" noGutters>
          
            <Row class="row_stuff" style={{height:100}}>
                <Col id="leftOne" md={6}>

                </Col>
                <Col id="rightOne" md={6}>
                <Document file={resume} 
          onLoadSuccess={({ numPages })=>setNumPages(numPages)}>

            {Array.apply(null, Array(numPages))
                .map((x, i)=>i+1)
                    .map(page => 
                        <Page pageNumber={page} />
            )}

          </Document>
                </Col>

            </Row>
          </Container>


      </div>
  );
}
export default About;