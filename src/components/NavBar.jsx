import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" style={{bottom: 15}}>
                            <Nav.Link as={HashLink} to="#home"
                                      className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                      onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link as={HashLink} to="#skills"
                                      className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                      onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link as={HashLink} to="#experience"
                                      className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                                      onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}
