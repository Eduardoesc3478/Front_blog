import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { PublicationCard } from './PublicationCard'

const CLASS_OPTIONS = [
  { value: '', label: 'Todas las categorías' },
  { value: 'TECNOLOGIA', label: 'Tecnología' },
  { value: 'TALLER', label: 'Taller' },
  { value: 'PRACTICA_SUPERVISADA', label: 'Práctica Supervisada' }
]

export const Publications = ({ publications }) => {
  const [selectedClass, setSelectedClass] = useState('')

  const filteredPublications = selectedClass
    ? publications.filter((p) => p.class === selectedClass)
    : publications

  return (
    <div className='publications-container'>
      <div style={{ marginBottom: 16 }}>
        <select
          value={selectedClass}
          onChange={e => setSelectedClass(e.target.value)}
          className="filter-dropdown"
        >
          {CLASS_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      {filteredPublications.map((p) => (
        <PublicationCard
          key={p._id}
          id={p._id}
          title={p.title}
          text={p.text}
          class={p.class}
          status={p.status}
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