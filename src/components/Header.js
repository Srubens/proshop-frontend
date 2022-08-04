import { Navbar, Container, Nav } from 'react-bootstrap'
function Header() {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect >
                <Container>
                    <Navbar.Brand href="/">Proshop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-end' >
                    <Nav>
                        <Nav.Link href="/cart">
                        <span style={{'marginRight':'10px'}} >

                            <i className='fas fa-shopping-cart'></i>
                        </span>
                        Cart
                        </Nav.Link>
                        <Nav.Link href="/login">
                        <span style={{'marginRight':'10px'}} >

                            <i className='fas fa-user'></i>
                        </span>
                        Sign In</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;