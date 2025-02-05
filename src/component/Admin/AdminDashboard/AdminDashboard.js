import React from 'react'
import Sidebar from './Sidebar'

const AdminDashboard = ({user, festDetails}) => {
  return (
    <div>
      <Sidebar user = {user}  festDetails = {festDetails} />
    </div>
  )
}

export default AdminDashboard
