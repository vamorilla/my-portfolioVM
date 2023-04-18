import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logoVM from '../assets/logoVM.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50 ) {
                setScroll(true);
            }else{
                setScroll(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scroll ? 'scroll' : ''}>
          <Container>
            <Navbar.Brand href="#home">
                <img src={logoVM} alt="logoVM" className="logoVM"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <button className="btn-linkedin"><a href="https://www.linkedin.com/in/vamorilla/" rel="noreferrer" target="_blank">Contactame</a></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}