import { useState } from 'react'
import toast from 'react-hot-toast'
import { addComment as addCommentRequest } from '../../services' // Importa la función para agregar comentarios

export const useAddComment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const addComment = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await addCommentRequest(data) // Llama al servicio para agregar el comentario
      setIsSubmitting(false)

      if (response.error) {
        toast.error(response.e?.response?.data?.message || 'Error al agregar el comentario')
        return null
      } else {
        toast.success('Comentario agregado exitosamente')
        return response.data
      }
    } catch (error) {
      setIsSubmitting(false)
      toast.error(
        error.response?.data?.message || 'Error al agregar el comentario'
      )
      throw error
    }
  }

  return {
    addComment,
    isSubmitting,
  }
}