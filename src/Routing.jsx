import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Outlet,
} from 'react-router-dom'

import './Routing.css'

export function Routing() {

  return (
    <div>
      <nav className='brayan'>
        <ul>
            <li>
                <Link to="/">Overview</Link>
            </li>
            <li>
                <Link to="/dielectric">Dielectric</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
