import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Layout(props) {
  return (
    <>
    <Navbar bg="success" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Fruit Bucket</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
          <Container>{props.children}</Container>
      </>
  )
}

export default Layout