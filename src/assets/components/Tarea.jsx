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
  /*const borrar =(id)=>{
    const newarreglo = Arreglo.filter((tarea)=>tarea.id!==id)
    //const newarreglo = Arreglo.filter((task) => task.id !== id)
    setValueSelect(newarreglo)
  }*/
  console.log(Arreglo)
  console.log("Longitud del arreglo:", Arreglo.length)
  return (
      <>
        <h1>Menu de tareas</h1>
        <input placeholder='Nombre de la Tarea' type="text" onChange={cambiainput}/>
        <input placeholder='Descripcion' type="text" onChange={cambiadescrip}/>
        <input placeholder='Fecha' type="text" onChange={cambiafecha}/>
        <button onClick={()=>setValueSelect([...Arreglo,{nombre:text,id:Date.now(),descrip:textdescrip,fecha:textfecha/*,realizada:false*/}])}>Tarea para agregar</button> 
        <ul>
        {Arreglo.length > 0 && <p>Lista de tareas</p>}
            { Arreglo.map((tarea)=>{ 
                return(
                  <>
                    <li key={tarea.id}>
                      {/* <button>Realizada</button>
                      <button onClick={ ()=> borrar(tarea.id) }>Eliminar</button> */}
                      <p>
                        Nombre de la tarea: {tarea.nombre}&nbsp;    
                        Descripcion de la tarea: {tarea.descrip}&nbsp;
                        Fecha: {tarea.fecha}&nbsp;
                        {/* Id: {tarea.id}&nbsp; TODAVIA NO ES NECESARIO*/}
                      </p>  
                    </li>
                  </>
                )
             }) }
        </ul>
    </>
  )
}