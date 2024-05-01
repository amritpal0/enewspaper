import React from 'react'
import Header from '../../component/UserPanel/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/UserPanel/Footer'

export default function UserLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
