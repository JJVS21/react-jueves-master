import { useState } from 'react' 
import './App.css'

function App(){
  const[contador, setContador]= useState(0)

  const incrementar = () => {
    setContador(contador + 1)
  }
  const descrementar = () => {
    setContador(contador - 1)
  }
  const resetear = () => {
    setContador(0)
  }
  
  return (
    <>
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={descrementar}>Decrementar</button>
      <button onClick={resetear}>Resetear</button>
    
    </>
  )
}

export default App
