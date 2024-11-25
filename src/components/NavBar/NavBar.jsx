import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        document.title = "Unizone";
    }, []);

    return (
        <>
            {/* Encabezado principal */}
            <header className="main-nav">
                <Link className="brand" to="/">UNIZONE</Link>
                <button className="menu-button" onClick={toggleMenu}>Menú</button>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar en unizone.com" />
                    <button className="search-button">🔍</button>
                </div>
                <div className="nav-icons">
                    <Link to="/login">👤 Mi cuenta</Link>
                    <Link to="/cart">🛒 Carrito</Link>
                </div>
            </header>

            {/* Menú desplegable */}
            {isMenuOpen && (
                <div className="dropdown-menu">
                    <ul className="menu-list">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/about">Acerca de</Link></li>
                        <li>Productos
                            <ul>
                                <li><Link to="/lista-productos">Lista de productos</Link></li>
                                <li><Link to="/detalle-producto">Detalles del producto</Link></li>
                            </ul>
                        </li>
                        <li>Páginas
                            <ul>
                                <li><Link to="/login">Iniciar sesión</Link></li>
                                <li><Link to="/checkout">Pagar</Link></li>
                                <li><Link to="/cart">Carrito de compras</Link></li>
                                <li><Link to="/confirmacion">Confirmación</Link></li>
                                <li><Link to="/elementos">Elementos</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default NavBar;