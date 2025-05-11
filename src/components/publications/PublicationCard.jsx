import React from 'react'
import PropTypes from 'prop-types'


export const PublicationCard = ({
    title,
    text,
    class: publicationClass,
    status,
    id,
    navigateToPublicationHandler
}) => {
    const handleNavigate = () => {
        navigateToPublicationHandler(id)
    }

    return (
        <div className='publications-card' onClick={handleNavigate}>
            <span className='publications-card-title'>{title}</span>
            <span className='publications-card-text'>{text}</span>
            <span className='publications-card-class'>{publicationClass}</span>
            <span
                className='publications-card-status'
                style={{ color: status ? "green" : "red" }}
            >
                {status ? "Active" : "Inactive"}
            </span>
        </div>
    )
}

PublicationCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    class: PropTypes.oneOf(["TECNOLOGIA", "TALLER", "PRACTICA_SUPERVISADA"]).isRequired,
    status: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    navigateToPublicationHandler: PropTypes.func.isRequired
}