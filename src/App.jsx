import { useState } from 'react'
import './App.css'
import { Tarea } from './assets/components/Tarea.jsx'

function App() {
  const [valueSelect, setValueSelect] = useState('Tarea')
  return (
    <>
      <div >
        <span onClick={() => setValueSelect('Tarea')}  >
          Lista de tareas
        </span>
        /
        <span onClick={() => setValueSelect('Producto')}  >
          Lista de productos
        </span>
      </div>
      {valueSelect === "Tarea" ? (
        <Tarea></Tarea>
      ) : (
        <Productos></Productos>
      )}
    </>
  )
}
export default App