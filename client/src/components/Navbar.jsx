import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar_rb from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { UseAuth } from '../context/AuthContext';

function Navbar() {
    const { isAuthenticated, logout, user } = UseAuth();

    return (
        <Navbar_rb bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar_rb.Brand as={Link} to="#home">
                    S.P.Bibliobus
                </Navbar_rb.Brand>
                <Nav className="me-auto">
                    {isAuthenticated ? (
                        <>
                            <Container className="d-flex justify-content-end">
                            <Navbar_rb.Text>
                                Sesion: {user.userfound.nombre}
                            </Navbar_rb.Text>
                            <Nav.Link as={Link} to="/add-task">
                                Add Task
                            </Nav.Link>
                           
                                <Button variant="outline-light" size="sm" className='align-center' onClick={logout} to="/">Logout</Button>{' '}
                            </Container>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to="/register">
                                Register
                            </Nav.Link>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar_rb>

    );
}

export default Navbar;