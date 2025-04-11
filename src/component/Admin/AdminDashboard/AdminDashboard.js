import React from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader'

const AdminDashboard = ({ user, festDetails }) => {
  return (
    <div className='bg-white'>
      <div className='flex space-x-4'>

        <div className='w-1/6 h-screen p-6'>
          <Sidebar user={user} festDetails={festDetails} />
        </div>
        <div className='w-5/6'>
          <AdminHeader user={user} />
        </div>

      </div>

    </div>
  )
}

export default AdminDashboard