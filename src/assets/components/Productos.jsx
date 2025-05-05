import '../css/Producto.css'
import { useState } from 'react'
export const Productos = () => {
  let arreglo = [];
  function agregar() {
    const lista = document.getElementById('lista');
    const producto = document.getElementById('producto').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const item = document.createElement('li');
    const objetoProductos = { producto, precio };
    arreglo.push(objetoProductos);
    item.textContent = `Producto: ${producto} - Precio: $${precio}`;
    lista.appendChild(item);
    console.log(arreglo);
  }

  function filtrar() {// 2 - Crear un nuevo array con los productos cuyo precio sea mayor a $20, usando filter
    const filtrar = arreglo.filter((i) => i.precio > 20);
    const lista = document.getElementById('lista');
    lista.textContent = ``;
    filtrar.forEach(producto => {
      const item = document.createElement('li');
      item.textContent = `Producto: ${producto.producto} - Precio: $${producto.precio}`;
      lista.appendChild(item);
    });
    arreglo = filtrar;
  }

  function iva() { // 3 - Crear un array con los productos, pero con el precio con IVA incluido (21%), usando map.
    const iva = arreglo.map((i) => {
      return {...i, precio: i.precio * 1.21}
    });
    const lista = document.getElementById('lista');
    lista.textContent = ``;
    iva.forEach(producto => {
      const item = document.createElement('li');
      item.textContent = `Producto: ${producto.producto} - Precio: $${producto.precio}`;
      lista.appendChild(item);
    });
  }

  function ordenar() { // 4 - Ordenar el array original de productos por precio de menor a mayor, usando sort.
    arreglo.sort((a, b) => a.precio - b.precio);
    const lista = document.getElementById('lista');
    lista.textContent = ``;
    arreglo.forEach(producto => {
      const item = document.createElement('li');
      item.textContent = `Producto: ${producto.producto} - Precio: $${producto.precio}`;
      lista.appendChild(item);
    });
  }

  function eliminar() { // 6 - Eliminar el producto con el precio más bajo del array. Mostrar cómo queda el array.
    let menor = arreglo[0].precio;
    arreglo.forEach((i)=>{
      if (i.precio < menor) {
        menor = i.precio;
      }
    });
    const filtrar = arreglo.filter((i) => i.precio !== menor);
    const lista = document.getElementById('lista');
    lista.textContent = ``;
    filtrar.forEach(producto => {
      const item = document.createElement('li');
      item.textContent = `Producto: ${producto.producto} - Precio: $${producto.precio}`;
      lista.appendChild(item);
    });
    arreglo = filtrar;
  }
  
  return (
    <>
      <h1 id="tit">Menu de Productos </h1>
      <input type="text" placeholder='Tipo de Producto' id='producto' />
      <input type="number" placeholder='Precio' id='precio' />
      <button onClick={ agregar } id="but">Agregar Producto</button>
      <button onClick={ filtrar } id="but">Filtrar</button>
      <button onClick={ iva } id="but">IVA</button>
      <button onClick={ ordenar } id="but">Ordenar Precios</button>
      <button onClick={ eliminar } id="buto">Eliminar</button>
      <div id='lista'></div>
    </>
  )
}
