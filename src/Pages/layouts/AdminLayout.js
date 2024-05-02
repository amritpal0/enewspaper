import React from 'react'
import NavBar from '../../component/AdminPanel/NavBar'
import SideBar from '../../component/AdminPanel/SideBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/UserPanel/Footer'

export default function AdminLayout() {
  return (
    <>
    
    <NavBar/>
    <div id="layoutSidenav">
        <SideBar/>
      <div id="layoutSidenav_content">
        <Outlet/>
        <Footer/>
      </div>
    </div>
    </>
  )
}
