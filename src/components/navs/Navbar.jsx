import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserDetails } from '../../shared/hooks'
import PropTypes from 'prop-types'

const NavLogo = ({ onClickHandler }) => {
    return (
        <div className='nav-logo-container' onClick={onClickHandler}>
            <img 
                src="https://i.ibb.co/9h0ZZfj/Escudo-Transparente.png" 
                alt="Logo de Kinal" 
                className='nav-logo'
                width="100%"
                height="100%"
            />
        </div>
    )
}

NavLogo.propTypes = {
    onClickHandler: PropTypes.func.isRequired
}

const NavButton = ({ text, onClickHandler }) => {
    return (
        <span className='nav-button' onClick={onClickHandler}>
            {text}
        </span>
    )
}

NavButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired
}

export const Navbar = () => {
    const { isLogged, logout } = useUserDetails()
    const navigate = useNavigate()
    const [navVisible, setNavVisible] = useState(false)

    const handleNavigateToAuthPage = () => navigate("/auth")
    const handleNavigateToSettings = () => navigate("/settings")
    const handleNavigateToPublications = () => navigate("/publications")
    const handleLogout = () => logout()
    const toggleNavVisibility = () => setNavVisible(!navVisible)

    return (
        <div className='nav-container'>
            <NavLogo onClickHandler={toggleNavVisibility} />
            <div className={`nav-buttons-container ${navVisible ? "visible" : ""}`}>
                <NavButton
                    text="Inicio"
                    onClickHandler={handleNavigateToPublications}
                />
                {!isLogged ? (
                    <NavButton
                        text="Iniciar Sesión"
                        onClickHandler={handleNavigateToAuthPage}
                    />
                ) : (
                    <>
                        <NavButton
                            text="Mi Cuenta"
                            onClickHandler={handleNavigateToSettings}
                        />
                        <NavButton text="Cerrar Sesión" onClickHandler={handleLogout} />
                    </>
                )}
            </div>
        </div>
    )
}
