import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Publications } from '../publications/Publications'
import { Settings } from '../settings/Settings'
import { Comments } from '../comments/Comments' 

import PropTypes from 'prop-types'

export const Content = ({ publications, comments }) => {
  return (
    <div className='content-container'>
        <Routes>
            <Route path='settings' element={<Settings />} />
            <Route path='publications' element={<Publications publications={publications} />} />
            <Route path='comments' element={<Comments comments={comments} />} />
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
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      user: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
      }),
      postId: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
    })
  ).isRequired
}