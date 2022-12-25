import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie'

const AuthRoutes:React.FC = () => {
    const cookies = new Cookies()
    let accessToken = cookies.get('access-token')
    
  return (
    accessToken ? <Outlet /> : <Navigate to='/' />
  )
}

export default AuthRoutes