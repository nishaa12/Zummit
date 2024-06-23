import React from 'react'
import Therapist_SideBar from '../Therapist_SideBar'
import Clients from './Clients'
import Existing_Client from './Existing_Client'
import Substance_Recovery from './Substance_Recovery'

const Therapist_Client = () => {
  return (
    <div className='flex bg-[#F2FCFF]'>
      <Therapist_SideBar/>  
      <Clients/>
      {/* <Existing_Client/> */}
      {/* <Substance_Recovery/> */}
    </div>
  )
}

export default Therapist_Client
