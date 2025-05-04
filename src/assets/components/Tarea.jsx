import React, { useEffect } from 'react'
import { useState } from 'react'
export const Tarea = () => {
  const [Arreglo, setValueSelect] = useState([])
  const [text, settext] = useState("")
  const [textdescrip, setdescrip] = useState("")
  const [textfecha, setfecha] = useState("")

  const cambiainput = (event)=> { settext(event.target.value) }
  const cambiadescrip = (event)=> { setdescrip(event.target.value) }
  const cambiafecha = (event)=> { setfecha(event.target.value) }
  const borrar =(id)=>{
    const newarreglo = Arreglo.filter((tarea)=>tarea.id!==id)
    //const newarreglo = Arreglo.filter((task) => task.id !== id)
    setValueSelect(newarreglo)
  }
  const subrayar = (tarea) => {
    const nuevasTareas = Arreglo.map(t => {
      if (t.id === tarea.id) {
        return { ...t, realizada: !t.realizada };
      }
      return t;
    });
    setValueSelect(nuevasTareas);
  };
  console.log(Arreglo)
  //console.log("Longitud del arreglo:", Arreglo.length)
  return (
      <>
        <h1>Menu de tareas</h1>
        <input placeholder='Nombre de la Tarea' type="text" onChange={cambiainput}/>
        <input placeholder='Descripcion' type="text" onChange={cambiadescrip}/>
        <input placeholder='Fecha' type="date" onChange={cambiafecha}/>
        <button onClick={()=>setValueSelect([...Arreglo,{nombre:text,id:Date.now(),descrip:textdescrip,fecha:textfecha,realizada:false}])}>Tarea para agregar</button> 
        <ul>
        {Arreglo.length > 0 && <p>Lista de tareas</p>}
            { Arreglo.map((tarea)=>{ 
                return(
                  <>
                    <li key={tarea.id}>
                      <button onClick={ ()=> subrayar(tarea) }>Realizada</button>
                      <button onClick={ ()=> borrar(tarea.id) }>Eliminar</button>
                      <div>
                        <p 
                          style={{
                          textDecoration: tarea.realizada ? 'line-through' : 'none',
                          }}
                        >
                        Nombre de la tarea: {tarea.nombre}&nbsp;</p>    
                        Descripcion de la tarea: {tarea.descrip}&nbsp;
                        Fecha: {tarea.fecha}&nbsp;
                        Id: {tarea.id}&nbsp;
                      </div>  
                    </li>
                  </>
                )
             }) }
        </ul>
    </>
  )
}