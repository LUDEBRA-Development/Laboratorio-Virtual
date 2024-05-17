//? React Imports
import { Routes, Route } from 'react-router-dom'
//? Components Imports
import { Dielectric } from './labs/dielectric/Dielectric'
import { Login } from './pages/login/Login'
import { PageNotFound } from './pages/pagenotfound/PageNotFound'
import { IndexPage } from './pages/overview/IndexPage'
import AuthProvider from './pages/login/AuthProvider'
import PrivateRoute from './pages/login/PrivateRoute'
//? CSS Imports
import './App.css'
import { Catalogo } from './pages/catalogo/Catalogo'
import { Apifetch } from './pages/Apifetch'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/fetch' element={<Apifetch />} />
        <Route element={<PrivateRoute />}>\
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/dielectric' element={<Dielectric />} /> 
        </Route> 
        {/* <Route path='/dielectric' element={<Dielectric />} /> */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  )
}
export default App
