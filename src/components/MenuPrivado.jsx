import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUsuario, logout } from '../seguranca/Autenticacao';

function ToggleTema() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const alteraTema = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <button onClick={alteraTema} className="btn link">
            {theme === 'light' ? (
                <i className="bi bi-moon"></i>
            ) : (
                <i className="bi bi-sun"></i>
            )}
        </button>
    );
}

function MenuPrivado() {
    const usuario = getUsuario()
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink className="navbar-brand" aria-current="page" exact="true" to="/privado">sistemaPedágio!</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link active" aria-current="page" exact="true" to="/privado">Home</NavLink>
                            {usuario &&
                                <NavDropdown title="Manutenções" id="basic-nav-dropdown">
                                    <NavLink className="dropdown-item" exact="true" to="local">Locais</NavLink>
                                    <NavLink className="dropdown-item" exact="true" to="tipo">Tipos</NavLink>
                                    <NavLink className="dropdown-item" exact="true" to="veiculo">Veículos</NavLink>
                                    <NavLink className="dropdown-item" exact="true" to="passagem">Passagens</NavLink>
                                </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">                        
                        <ToggleTema />
                        <NavDropdown title={usuario ? "Usuário: " + usuario.nome : "Usuário"} id="basic-nav-dropdown">
                            {usuario ?
                                <>
                                    <NavLink className="dropdown-item" exact="true"
                                        to="/privado/perfil">Perfil</NavLink>
                                
                                    <NavLink className="dropdown-item" exact="true"
                                        to="/" onClick={() => logout()}>Logout</NavLink>
                                </>
                                :
                                <NavLink className="dropdown-item" exact="true"
                                    to="/login">login</NavLink>
                            }
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}

export default MenuPrivado;