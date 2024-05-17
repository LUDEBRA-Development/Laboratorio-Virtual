import React from 'react'
import { useState, useEffect } from 'react'

export function Apifetch() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let url = 'https://laboratorio-virtual-backend.onrender.com/api/users'

    fetch(url, {
      method: 'GET',
      mode: 'no-cors',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al realizar la solicitud')
        }
        return response.json()
      })
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1>Datos de la API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
