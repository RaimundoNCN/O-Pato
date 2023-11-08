import { useState } from 'react'
import patotimido from './assets/patio.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>O Pato Timido</h1>
      <div>
        <img src={patotimido} className="perfilPato" alt="perfilPato" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Olá Mundo! {count}
        </button>
        <p>
          Vire amigo do Pato, fale com ele!😊
        </p>
        <textarea className="message"></textarea>
      </div> 
      
      <div>
        <button className='click'>Enviar</button>
      </div>
      <p className="read-the-docs">
        Desenvolvendo um App React
      </p>
    </>
  )
}

export default App
