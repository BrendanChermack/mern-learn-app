import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const CusNavBar = () => {
    return(
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href='#ToDoBrand'>TODO</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#ToDo'>ToDo</Nav.Link>
                        <Nav.Link href='#Help'>Help</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
)};

export default CusNavBar;