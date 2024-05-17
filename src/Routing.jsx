import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { IndexPage } from './pages/overview/IndexPage'
import { Dielectric } from './labs/dielectric/Dielectric'
import { Login } from './pages/login/Login'
import './Routing.css'

export function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/dielectric' element={<Dielectric />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Outlet />
    </div>
  )
}
