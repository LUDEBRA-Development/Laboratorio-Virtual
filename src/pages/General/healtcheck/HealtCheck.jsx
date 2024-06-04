import { useEffect, useState } from 'react'
import { defaultUrlPath } from '../../../models/GlobalVars'

export function HealtCheck() {
  const [healtMessage, setHealtMessage] = useState('')

  useEffect(() => {
    fetch(`${defaultUrlPath}/users`)
      .then(response => response.json())
      .then(data => {
        if (data.body) {
          setHealtMessage('Ok')
        } else {
          setHealtMessage('Error')
        }
      })
  }, [])

  return (
    <div>
      <p>{healtMessage}</p>
    </div>
  )
}
