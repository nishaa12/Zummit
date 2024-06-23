import React from 'react'
import Therapist_SideBar from '../Therapist_SideBar'
import Schedules from './Schedules'

const Therapist_Schedules = () => {
  return (
    <div className='flex bg-[#F2FCFF]'>
        <Therapist_SideBar/>
        <Schedules/>
    </div>
  )
}

export default Therapist_Schedules
