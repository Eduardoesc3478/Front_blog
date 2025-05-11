import { useState, useEffect, useCallback } from 'react'
import toast from 'react-hot-toast'
import { getPublications as getPublicationsRequest } from '../../services'

export const usePublications = () => {
    const [publications, setPublications] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    const getPublications = useCallback(async () => {
        setIsFetching(true)
        const publicationsData = await getPublicationsRequest()

        if (publicationsData.error) {
            toast.error(publicationsData.e?.response?.data || 'Error al obtener las publicaciones')
            setIsFetching(false)
            return
        }

        setPublications(publicationsData.data.publications)
        setIsFetching(false)
    }, [])

    useEffect(() => {
        getPublications()
    }, [getPublications])

    return {
        getPublications,
        allPublications: publications,
        isFetching
    }
}
