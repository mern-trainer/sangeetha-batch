import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap"

const TopMenu = () => {
    return <Navbar expand="md" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Brand href="#home">
                <Image src="./logo.png" height={40}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Shop</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default TopMenu
