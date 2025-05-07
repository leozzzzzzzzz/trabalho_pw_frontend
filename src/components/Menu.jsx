import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Outlet } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink className="navbar-brand" aria-current="page" exact="true" to="/">sistemaPedágio!</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link active" aria-current="page" exact="true" to="/">Home</NavLink>
                            <NavDropdown title="Manutenções" id="basic-nav-dropdown">
                                <NavLink className="dropdown-item" exact="true" to="local">Locais</NavLink>
                                <NavLink className="dropdown-item" exact="true" to="tipo">Tipos</NavLink>
                                <NavLink className="dropdown-item" exact="true" to="veiculo">Veículos</NavLink>
                                <NavLink className="dropdown-item" exact="true" to="passagem">Passagens</NavLink>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}

export default Menu;