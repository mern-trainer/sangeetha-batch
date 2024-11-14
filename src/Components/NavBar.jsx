import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

const TopMenu = () => {
    return <Navbar expand="md" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Brand href="#home">
                <Image src="../logo.png" height={40}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Link to={"/shop"}>Shop</Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default TopMenu
