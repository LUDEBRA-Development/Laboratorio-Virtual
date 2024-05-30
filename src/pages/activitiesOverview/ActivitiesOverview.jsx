import { useParams } from 'react-router-dom'

export function ActivitiesOverview({ data }) {
  const { index } = useParams()
  const itemIndex = index
  const item = data[itemIndex]

  if (!item) {
    return (
      <div>
        <h2>Item no encontrado</h2>
      </div>
    )
  }

  return (
    <div>
      <h2>Detalles del Item {itemIndex}</h2>
      <pre>{JSON.stringify(item, null, 2)}</pre>
      <p>{item.Course}</p>
      <p>{item.Task}</p>
      <p>{item.Descriptions}</p>
      <p>{item.Simulator}</p>
    </div>
  )
}
