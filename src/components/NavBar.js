import React, {useState, useEffect} from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
// import logos
import logo from '../assets/img/logo2-cropped.svg'
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/nav-icon2.svg';
import NavIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    // hooks
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScorlled ] = useState(false)

    // functions
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                seScorlled(true);
            }
            else{
                seScorlled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return() => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="/" className="logo">
                    <span className="logo">
                    <img src= {logo} alt = "" />
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className = "navbar-toogle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/chaitanya-sagar-4aa755159/"><img src={NavIcon1} alt="" /></a>
                        <a href="https://www.facebook.com/chetusagar98/"><img src={NavIcon2} alt="" /></a>
                        <a href="https://www.instagram.com/ichaitanya_sagar/"><img src={NavIcon3} alt="" /></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Lets's Connect</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}