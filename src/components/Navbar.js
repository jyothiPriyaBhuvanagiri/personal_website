import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect, useState} from "react";

const onUpdateActiveLink=(value) =>{
setActiveLink(value)
}

//this is function for links
function BasicExample() {
    const [activeLink, SetactiveLink] = useState('home')

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
           if (window.scrollY > 50){
              setScrolled(true)
           }
           else{
               setScrolled(false)
           }
        }
        window.addEventListener("scroll", onScroll)

        return() => window.removeEventListener("scroll", onScroll)

    }, []);
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled":"" }>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={/* Provide the path to your logo image */} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link"
                        :'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link"
                            :'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link"
                            :'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={} alt="" /></a>
                            <a href="#"><img src={} alt="" /></a>
                            <a href="#"><img src={} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connected')}>
                            <span>Lets Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
