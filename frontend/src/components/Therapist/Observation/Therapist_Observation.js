import React from 'react'
import Therapist_SideBar from '../Therapist_SideBar'
import Observation from './Observation'

const Therapist_Observation = () => {
  return (
    <div className='flex bg-[#F2FCFF]'>
      <Therapist_SideBar/>
      <Observation/>
    </div>
  )
}

export default Therapist_Observation
