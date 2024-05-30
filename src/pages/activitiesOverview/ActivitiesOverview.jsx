import { useParams } from 'react-router-dom'
import { useInfoTasksStore } from '../../store/infoTasksStore'

export function ActivitiesOverview({ data }) {
  const { index } = useParams()
  const itemIndex = index
  const item = data[itemIndex]


  const useStructure = useInfoTasksStore(state => state.structure)


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
      <p>{console.log(useStructure)}</p>
    </div>
  )
}
