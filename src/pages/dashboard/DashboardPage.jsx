import React from 'react'
import { Navbar } from '../../components/navs/Navbar'
import { Content } from '../../components/dashboard/Content'
import { usePublications } from '../../shared/hooks'
import { useComments } from '../../shared/hooks' 
import { LoadingSpinner } from '../../components/LoadingSpinner'
import './dashboardPage.css'

export const DashboardPage = () => {
  const { allPublications, getPublications, isFetching } = usePublications()
  const { allComments, getComments, isFetching: isFetchingComments } = useComments() 

  if (isFetching || isFetchingComments) {
    return <LoadingSpinner />
  }

  return (
    <div className='dashboard-container'>
      <div className='dashboard-background' />
      <Navbar />
      <Content 
        publications={allPublications} 
        comments={allComments}
      />
    </div>
  )
}

