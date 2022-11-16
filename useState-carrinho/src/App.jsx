import { useState } from 'react'
import './App.css'

function App() {

  const [ qtdeCarrinho, setQtdeCarrinho ] = useState(0)
  const [ user, setUser ] = useState({
    id: 1,
    name: 'Abigail Praxedes',
    photo: 'https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg'
  })

  function aumentarCarrinho() {
    setQtdeCarrinho(qtdeCarrinho + 1)
  }

  function diminuirCarrinho() {
    setQtdeCarrinho(qtdeCarrinho - 1)
  }

  return (
    <>
      <div><h3>Quantidade de Produtos no carrinho: <b>{ qtdeCarrinho }</b></h3></div>
      <div><button onClick={ aumentarCarrinho }>Adicionar +1 no carrinho</button></div>
      <div><button onClick={ diminuirCarrinho }>Remover + 1 no carrinho</button></div>

      <hr />

      Nome do usuário: <b>{ user.name} </b> <br />
      <img src={ user.photo } />
    </>
  )
}

export default App
