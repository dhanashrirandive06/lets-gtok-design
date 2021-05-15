import React, { Fragment, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

function TopNavbar() {
 
  return (
    <Fragment>
        <Navbar className={"navbarLogin px-lg-5"} expand="lg">
          <Navbar.Brand className="navbarBrand " href="/">
          <span className="navSpan mx-2 font-weight-normal">G</span>  Lets Gtok
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="mobileNav">
            <i className="bx bx-menu text-dark"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="mobileNav" className="px-3 py-3 ">
            <Nav className="ml-auto">
              <Nav.Link className="loginLink" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="loginLink" href="#blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="loginLink" href="#careers">
                Careers
              </Nav.Link>
              <Nav.Link className="loginLink" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
   
       </Fragment>
  );
}

export default TopNavbar;
