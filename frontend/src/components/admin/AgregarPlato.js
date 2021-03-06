import React, { useEffect, useState } from 'react';
import '../Sections.css';

function AgregarPlato(){
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha_ini, setFechaIni] = useState('');
    const [fecha_final, setFechaFinal] = useState('');
    const [precio, setPrecio] = useState('');

    const id = 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const plato = { nombre, tipo, descripcion, fecha_ini, fecha_final, precio,  id } 
    

    fetch('/crearplato', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plato)
    });
 };

    return(<section>
         <h2>Agregar Plato</h2>
      <form onSubmit={handleSubmit}>
      <div class="card-body p-1">
        <label>Nombre:</label>
        <input 
          type="text" 
          required 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Tipo:</label>
        <input 
          type="text" 
          required 
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <label>Descripcion:</label>
        <input 
          type="text" 
          required 
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <label>Fecha de inicio:</label>
        <input 
          type="date" 
          required 
          value={fecha_ini}
          onChange={(e) => setFechaIni(e.target.value)}
        />
        <label>Fecha final:</label>
        <input 
          type="date" 
          required 
          value={fecha_final}
          onChange={(e) => setFechaFinal(e.target.value)}
        />
        <label>Precio:</label>
        <input 
          type="number" 
          required 
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button>Crear</button>
        </div>
      </form>
    </section>);
}

export default AgregarPlato;