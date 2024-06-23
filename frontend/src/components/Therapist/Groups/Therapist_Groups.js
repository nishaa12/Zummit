import React from 'react'
import Therapist_SideBar from '../Therapist_SideBar'
import Groups from './Groups'

const Therapist_Groups = () => {
  return (
    <div className='flex bg-[#F2FCFF]'>
      <Therapist_SideBar/>
      <Groups/>
    </div>
  )
}

export default Therapist_Groups
