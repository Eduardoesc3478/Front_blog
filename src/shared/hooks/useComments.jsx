import { useState, useEffect, useCallback } from 'react'
import toast from 'react-hot-toast'
import { getAllComments } from '../../services' // Importa la función getAllComments desde los servicios

export const useComments = () => {
    const [comments, setComments] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    const getComments = useCallback(async () => {
        setIsFetching(true)
        try {
            const response = await getAllComments() // Llama a la función getAllComments
            setComments(response.data.comments) // Asigna los comentarios obtenidos al estado
        } catch (error) {
            toast.error(
                error.response?.data?.message || 'Error al obtener los comentarios'
            )
        } finally {
            setIsFetching(false)
        }
    }, [])

    useEffect(() => {
        getComments()
    }, [getComments])

    return {
        getComments,
        allComments: comments,
        isFetching
    }
}