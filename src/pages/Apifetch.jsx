import React from 'react'
import { useState, useEffect } from 'react'

export function Apifetch() {
  const [articulos, setArticulos] = useState([])
  let varFetch = "http://181.58.153.88:3000/api/users/augusto"
  function scrap() {
    fetch(varFetch, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'default'
    })
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        console.log(articulos)
      })
  }

  useEffect(() => {
    scrap()
  }, [])

  return (
    <div>
      <table border='1'>
        <thead>
          <tr>
            <th>Identificacion</th>
            <th>Primer Nombre</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((art) => {
            return (
              <tr key={art.Identification}>
                <td>{art.First_name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
