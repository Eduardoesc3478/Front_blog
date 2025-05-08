import React from 'react'
import PropTypes from 'prop-types'

export const Logo = ({text}) => {
    const logo = "https://i.ibb.co/9h0ZZfj/Escudo-Transparente.png"
  return (
    <div className='auth-form-logo-container'>
        <img 
            src={logo} 
            alt="Escudo Fundación Kinal"
            style={{
                width: '40px',
                height: '40px'
            }} 
        />
        <span>{text}</span>
    </div>
  )
}

Logo.propTypes = {
    text: PropTypes.string.isRequired
}

