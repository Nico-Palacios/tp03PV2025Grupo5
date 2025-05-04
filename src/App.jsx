import { useState } from 'react'
import './App.css'
import { Tarea } from './assets/components/Tarea.jsx'
import { Productos } from "./assets/components/Productos.jsx";

function App() {
  const [valueSelect, setValueSelect] = useState('Tarea')
  return (
    <>
      <div >
        <button onClick={() => setValueSelect('Tarea')}  >
          Lista de tareas
        </button>
        /
        <button onClick={() => setValueSelect('Productos')}  >
          Lista de productos
        </button>
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