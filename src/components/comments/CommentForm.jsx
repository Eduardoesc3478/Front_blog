import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { addComment } from '../../services/api' // Importa la función para agregar comentarios
import { usePublications } from '../../shared/hooks/usePublications' // Importa el hook para obtener publicaciones

export const AddCommentForm = ({ onClose, onCommentAdded }) => {
  const [formData, setFormData] = useState({
    content: '',
    userName: '',
    postId: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Usa el hook para obtener las publicaciones
  const { allPublications, isFetching } = usePublications()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.content.trim() || !formData.userName.trim() || !formData.postId.trim()) {
      alert('Por favor, completa todos los campos.')
      return
    }
    setIsSubmitting(true)
    try {
      const response = await addComment(formData)
      if (response.error) {
        console.error('Error al agregar el comentario:', response.e)
        alert('Error al agregar el comentario. Inténtalo de nuevo.')
        return
      }
      onCommentAdded(response.data) // Notifica al componente padre que se agregó un comentario
      setFormData({ content: '', userName: '', postId: '' })
      onClose() // Cierra el formulario
      window.location.reload() // Recarga la página
    } catch (error) {
      console.error('Error inesperado:', error)
      alert('Error inesperado. Inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form className="comment-form" onSubmit={handleSubmit}>
          <h2>Agregar Comentario</h2>
          <div className="form-group">
            <label htmlFor="userName">Usuario:</label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Ingresa tu nombre de usuario"
              value={formData.userName}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="postId">Selecciona una Publicación:</label>
            <select
              name="postId"
              id="postId"
              value={formData.postId}
              onChange={handleChange}
              disabled={isSubmitting || isFetching}
              required
            >
              <option value="">-- Selecciona una publicación --</option>
              {allPublications.map((publication) => (
                <option key={publication._id} value={publication._id}>
                  {publication.title}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="content">Comentario:</label>
            <textarea
              name="content"
              id="content"
              placeholder="Escribe tu comentario aquí"
              value={formData.content}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Agregar'}
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

AddCommentForm.propTypes = {
  onClose: PropTypes.func.isRequired, // Función para cerrar el formulario
  onCommentAdded: PropTypes.func.isRequired, // Función para manejar el comentario agregado
}