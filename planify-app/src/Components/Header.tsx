import { Navbar, Container, Nav, NavDropdown, Button, Form } from "react-bootstrap";

function Header(){
    return(
        <><Navbar expand="lg" className="bg-body-tertiary">
            
            <Container>
                <Navbar.Brand href="/" >Planify</Navbar.Brand>    
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/taskform">Account</Nav.Link>
                        <NavDropdown title="Tasks" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Task Form</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Task Hub
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar></>
    )
}

export default Header;