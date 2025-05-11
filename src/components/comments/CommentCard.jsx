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
      <span className='comment-card-content'>Comentario: {content}</span>
      <br />
      <span className='comment-card-user'>Usuario: {userName || 'Anónimo'}</span>
      <br />

    </div>
  )
}

CommentCard.propTypes = {
  content: PropTypes.string.isRequired,
  userName: PropTypes.string, 
  title: PropTypes.string, 
  status: PropTypes.bool.isRequired, 
}

CommentCard.defaultProps = {
  userName: 'Anónimo', 
  title: 'Sin título', 
}