import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Publications } from '../publications/Publications'
import { Settings } from '../settings/Settings'
import PropTypes from 'prop-types'

export const Content = ({ publications, getPublications }) => {
  return (
    <div className='content-container'>
        <Routes>
            <Route path='settings' element={<Settings />} />
            <Route path='publications' element={<Publications publications={publications} />} />
        </Routes>
    </div>
  )
}

Content.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      class: PropTypes.oneOf(["TECNOLOGIA", "TALLER", "PRACTICA_SUPERVISADA"]).isRequired,
      status: PropTypes.bool
    })
  ).isRequired,
  getPublications: PropTypes.func.isRequired
}