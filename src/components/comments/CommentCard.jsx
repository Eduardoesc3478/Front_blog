import React from 'react'
import PropTypes from 'prop-types'

export const CommentCard = ({
  content,
  userName,
  title,
  status,
}) => {
  return (
    <div className={`comment-card ${status ? 'active' : 'inactive'}`}>
      <span className='comment-card-title'>Actividad: {title || 'Sin título'}</span>
      <br />
      <span className='comment-card-content'>Comentario: {content}</span>
      <br />
      <span className='comment-card-user'>Usuario: {userName || 'Anónimo'}</span>
      <br />

    </div>
  )
}

CommentCard.propTypes = {
  content: PropTypes.string.isRequired,
  userName: PropTypes.string, // Cambiado para aceptar directamente un string
  title: PropTypes.string, // Validación para el título de la publicación
  status: PropTypes.bool.isRequired, // Validación para el estado del comentario
}

CommentCard.defaultProps = {
  userName: 'Anónimo', // Valor predeterminado para el nombre de usuario
  title: 'Sin título', // Valor predeterminado para el título de la publicación
}