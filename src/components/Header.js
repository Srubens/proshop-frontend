import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect >
                <Container>
                    <LinkContainer to="/" >
                        <Navbar.Brand >Proshop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-end' >
                    <Nav>
                        <LinkContainer to="/cart" >
                            <Nav.Link>
                            <span style={{'marginRight':'10px'}} >

                                <i className='fas fa-shopping-cart'></i>
                            </span>
                            Cart
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login" >
                            <Nav.Link >
                            <span style={{'marginRight':'10px'}} >

                                <i className='fas fa-user'></i>
                            </span>
                            Sign In
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;