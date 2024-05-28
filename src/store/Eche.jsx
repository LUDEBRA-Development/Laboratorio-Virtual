import { monda } from "./infoUsersStore"

export function Eche() {
  const tokenValor = monda(state => state.tokenValue)

  console.log(tokenValor)
  return (
    <div>
      <p>{tokenValor}</p>
    </div>
  )
}
