//? React Imports
import { Routes, Route } from 'react-router-dom'
//? Components Imports
import { Dielectric } from './labs/dielectric/Dielectric'
import { Login } from './pages/login/Login'
import { PageNotFound } from './pages/pagenotfound/PageNotFound'
import { IndexPage } from './pages/overview/IndexPage'
import { AuthProvider } from './pages/login/AuthProvider'
import PrivateRoute from './pages/login/PrivateRoute'
//? CSS Imports
import './App.css'
import { Catalogo } from './pages/catalogo/Catalogo'
import { Apifetch } from './pages/Apifetch'
import { Subjects } from './pages/materias/Subjects'
import { Activities } from './pages/actividades/Activities'
import { Ingreso } from './pages/IngresoUsuarios/Ingreso'
import { PruebaImagen } from './pages/PruebaImagen'
// import { InfoActivities } from './pages/activitiesOverview/InfoActivities'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/fetch' element={<Apifetch />} />
        <Route path='/imagen' element={<PruebaImagen />} />
        {/* <Route path='infoActividad/:taskId' element={<InfoActivities />} /> */}
        <Route element={<PrivateRoute />}>
          <Route path='/materias' element={<Subjects />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/actividades' element={<Activities />} />
          <Route path='/dielectric' element={<Dielectric />} />
          <Route path='/ingreso' element={<Ingreso />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  )
}
export default App
