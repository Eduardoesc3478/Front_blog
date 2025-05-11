import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate()
    const [navVisible, setNavVisible] = useState(false)

    
  
    const handleNavigateToPublications = () => navigate("/publications")
    const handleNavigateToComments = () => navigate("/comments") 
    const toggleNavVisibility = () => setNavVisible(!navVisible)

    return (
        <div className='nav-container'>
            <NavLogo onClickHandler={toggleNavVisibility} />
            <div className={`nav-buttons-container ${navVisible ? "visible" : ""}`}>
                <NavButton
                    text="Publicaciones"
                    onClickHandler={handleNavigateToPublications}
                />
                <NavButton
                    text="Comentarios"
                    onClickHandler={handleNavigateToComments} 
                />
               
            </div>
        </div>
    )
}
