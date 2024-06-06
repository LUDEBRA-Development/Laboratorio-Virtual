import { useEffect } from 'react'
import { defaultUrlPath } from '../../models/GlobalVars'
import { useInfoUsersStore } from '../../store/infoUsersStore'

export function PruebaFetch() {
  const userToken = useInfoUsersStore(state => state.token)

  useEffect(() => {
    const values = {
      Id_course: '1',
      Id_task: '3',
    }
    fetch(`${defaultUrlPath}/users/info/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }, [])

  return (
    <div>
      <h1>PruebaFetch</h1>
    </div>
  )
}
