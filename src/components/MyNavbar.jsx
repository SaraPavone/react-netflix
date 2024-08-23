import { Component } from "react";
import { Navbar, Nav, } from "react-bootstrap";

class MyNavbar extends Component {


    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" className="px-3" data-bs-theme="dark" >
     
        <Navbar.Brand href="#">
          <img src="logo.png" 
          width="70"
          height="50"
          alt="Netflix logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Galleries</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
            </>
        )
    }
}

export default MyNavbar