import { useInfoUsersStore } from './infoUsersStore'

export function Eche() {
  const token = useInfoUsersStore(state => state.tokenValue)
  const email = useInfoUsersStore(state => state.email)
  const monda = useInfoUsersStore(state => state.monda)
  const firstName = useInfoUsersStore(state => state.profilePic)
  const profilePic = useInfoUsersStore(state => state.firstName)
  const updateMonda = useInfoUsersStore(state => state.updateMonda)

  return (
    <div style={{ color: 'black' }}>
      <p>{token}</p>
      <p>{email}</p>
      <p>{firstName}</p>
      <p>{profilePic}</p>
      <p>{monda}</p>
      <input type="text" onChange={e => updateMonda(e.currentTarget.value)} value={monda}/>
      <button type='button' onClick={e => updateMonda(e.currentTarget.value)} >
        kasjdfkjaksdjfajk
      </button>
    </div>
  )
}
