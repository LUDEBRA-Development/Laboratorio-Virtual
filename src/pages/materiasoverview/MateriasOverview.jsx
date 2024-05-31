import { useParams } from 'react-router-dom';
import { useInfoSubjectsStore } from '../../store/infoSubjectsStore';

export const MateriasOverview = () => {
  const { index } = useParams();
  const itemIndex = index
  const data = useInfoSubjectsStore(state => state.structureSubjects);
  const item = data[itemIndex];

  if (!item) {
    return (
      <div>
        <h2>Item no encontrado</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Detalles del Item {itemIndex}</h2>
      <pre>{JSON.stringify(item, null, 2)}</pre>
      <p>{item.Name}</p>
    </div>
  );
};

