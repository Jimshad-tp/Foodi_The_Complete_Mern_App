import React from 'react'
import Home from '../pages/home/Home'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <footer>footer</footer>
    </div>
  )
}

export default Main