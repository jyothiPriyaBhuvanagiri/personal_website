import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../asset/img/nav-icon1.svg";
import navIcon2 from "../asset/img/nav-icon2.svg";
import navIcon3 from "../asset/img/nav-icon3.svg";

//this is for footer
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
                            <a href="https://www.xing.com/profile/Jyothi_Priya047068/web_profiles?expandNeffi=true" target="_blank"
                               rel="noopener noreferrer">
                                <img src={navIcon3} alt="Xing"/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
