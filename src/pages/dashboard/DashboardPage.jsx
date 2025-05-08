import React from 'react'
import { Navbar } from '../../components/navs/Navbar'
import { Content } from '../../components/dashboard/Content'
import { usePublications } from '../../shared/hooks'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import './dashboardPage.css'

export const DashboardPage = () => {
  const { allPublications, getPublications, isFetching } = usePublications()

  if (isFetching) {
    return <LoadingSpinner />
  }

  return (
    <div className='dashboard-container'>
      <div className='dashboard-background' />
      <Navbar />
      <Content publications={allPublications} getPublications={getPublications} />
    </div>
  )
}

