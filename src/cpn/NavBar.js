import {Navbar, Container, Nav} from 'react-bootstrap';
import {useState, useEffect} from "react";
import logo from '../assets/img/logo.png';
import social1 from '../assets/img/linkedin.png';
import social2 from '../assets/img/facebook.png';
import social3 from '../assets/img/instagram.png';
import{Link} from 'react-router-dom';

export const NavBar = () =>{
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, setScrolled] = useState(false);

    useEffect(()=>{
      const onScroll= () =>{
        if(window.scrollY>50){
          setScrolled(true);
        }else{
          setScrolled(false);
        }
      }

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);

    }, [])


    

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="logo"/>
          <span className="brand-title">MSHN</span>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>


        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#bio" className={activeLink === 'bio' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('bio')}>Bio</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('project')}>Project</Nav.Link>



            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <span className="nv-text">
            <div className="nv-icon">
              <a href='#'><img src={social1} alt="" /></a>
              <a href='#'><img src={social2} alt="" /></a>
              <a href='#'><img src={social3} alt="" /></a>
            </div>
            <Link to="/contact">
              <button className="mms">Contact Me</button>
            </Link>
          </span>



        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}