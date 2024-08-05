import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../asset/img/nav-icon1.svg";
import navIcon2 from "../asset/img/nav-icon2.svg";


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} className="text-center">
                        <div className="social-icon">
                            <a href="https://github.com/jyothiPriyaBhuvanagiri" target="_blank"
                               rel="noopener noreferrer">
                                <img src={navIcon2} alt="GitHub"/>
                            </a>
                            <a href="https://www.linkedin.com/in/jyothi-priya-a93a8b205" target="_blank"
                               rel="noopener noreferrer">
                                <img src={navIcon1} alt="LinkedIn"/>
                            </a>
                            <a href="https://www.linkedin.com/in/jyothi-priya-a93a8b205" target="_blank"
                               rel="noopener noreferrer">
                                <img src={navIcon1} alt="LinkedIn"/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
