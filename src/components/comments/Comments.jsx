import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { CommentCard } from './CommentCard'
import { AddCommentForm } from './CommentForm'

export const Comments = ({ comments, publications }) => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const handleNavigateToComment = (id) => {
    navigate(`/comment/${id}`)
  }

  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  const handleCommentAdded = (newComment) => {
    console.log('Nuevo comentario:', newComment)
    // Aquí puedes actualizar la lista de comentarios
    setShowModal(false)
  }

  return (
    <div className='comments-container'>
      <section className='add-comment-section'>
        <button className='add-comment-button' onClick={handleOpenModal}>
          Agregar Comentario
        </button>
      </section>
      {showModal && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <AddCommentForm
              onClose={handleCloseModal}
              onCommentAdded={handleCommentAdded}
              publications={publications}
            />
          </div>
        </div>
      )}
      <section className='comments-list'>
        {comments.map((comment) => (
          <CommentCard
            key={comment._id}
            id={comment._id}
            content={comment.content}
            userName={comment.userName}
            
            navigateToCommentHandler={handleNavigateToComment}
          />
        ))}
      </section>
    </div>
  )
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      userName: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
      }),
      postId: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
    })
  ).isRequired,
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}