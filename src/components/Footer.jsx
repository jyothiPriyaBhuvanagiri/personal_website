import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../asset/img/nav-icon1.svg";
import navIcon2 from "../asset/img/nav-icon2.svg";
import navIcon3 from "../asset/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">

                    <Col size={12} sm={7} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://github.com/jyothiPriyaBhuvanagiri" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon2} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/jyothi-priya-a93a8b205" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1} alt="LinkedIn" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
