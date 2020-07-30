import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">

      <h1>PetSociety</h1>
      <h1>Tabla de integrantes</h1>
      <div>
      <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>TI</th>
              <th>Número</th>
              <th>IE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Joaquín Higuita Lopez</td>
              <td>joaquin050218@gmail.com</td>
              <td>1015066347</td>
              <td>3206270582</td>
              <td>Javiera Londoño</td>
            </tr>
            <tr>
              <td>David Castañeda Quintero</td>
              <td>davidcastanedaquintero@gmail.com</td>
              <td>1025641452</td>
              <td>3052583246</td>
              <td>Javiera Londoño</td>
            </tr>
            <tr>
              <td>Sebastián Parra Lopera</td>
              <td>sebastianparralopera351@gmail.com</td>
              <td>1011390733</td>
              <td>3104109270</td>
              <td>Javiera Londoño</td>
            </tr>  
          </tbody>
        </table>
        </div>
    </div>
  );
}

export default App;
