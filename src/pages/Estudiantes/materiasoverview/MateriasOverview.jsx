import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Preloader } from '../../General/preloader/Preloader'

export function MateriasOverview({ datos }) {
  const { id } = useParams()
  const itemIndex = id
  const item = datos[itemIndex]

  if (!item) {
    return (
      <div>
        <h2>Item no encontrado</h2>
      </div>
    )
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <h2>Detalles del Item {itemIndex}</h2>
          <pre>{JSON.stringify(item, null, 2)}</pre>
          <p>{item?.Name}</p>
        </div>
      )}
    </div>
  )
}
