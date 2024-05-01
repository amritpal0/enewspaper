import React from 'react'
import NavBar from '../../component/AdminPanel/NavBar'
import SideBar from '../../component/AdminPanel/SideBar'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
    <NavBar/>
    <SideBar/>
    <Outlet/>
    </>
  )
}
