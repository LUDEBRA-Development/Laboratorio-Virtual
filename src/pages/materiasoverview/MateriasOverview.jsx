import { useParams } from 'react-router-dom'

export const MateriasOverview = ({ data }) => {
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
      {console.log(item)}
      <h2>Detalles del Item {itemIndex}</h2>
      <pre>{JSON.stringify(item, null, 2)}</pre>
      <p>{item.Name}</p>
    </div>
  )
}
