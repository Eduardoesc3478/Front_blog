import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { PublicationCard } from './PublicationCard'

export const Publications = ({ publications }) => {
  const navigate = useNavigate()

  const handleNavigateToPublication = (id) => {
    navigate(`/publication/${id}`)
  }

  return (
    <div className='publications-container'>
      {publications.map((p) => (
        <PublicationCard
          key={p.id}
          id={p.id}
          title={p.title}
          text={p.text}
          class={p.class}
          status={p.status}
          navigateToPublicationHandler={handleNavigateToPublication}
        />
      ))}
    </div>
  )
}

Publications.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      class: PropTypes.oneOf(["TECNOLOGIA", "TALLER", "PRACTICA_SUPERVISADA"]).isRequired,
      status: PropTypes.bool
    })
  ).isRequired
}