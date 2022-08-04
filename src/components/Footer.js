import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <Container>
            <Row>
                <Col className='text-center py-3' >
                    <div>Copyright &copy; Proshop - Rubens Filipe</div>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;