import React from 'react';
import './App.css';

function ButtonAcessar() {
  return (
    <button>Acessar</button>
  );
}

function Formulario() {
  return (
    <h1 title="Login">
      <input type="email" id="email" placeholder="E-mail"/>
      <input type="password" id="password" placeholder="Senha"/>
      <ButtonAcessar/>
    </h1>
  );
}


function App() {
  return (
    <div>

    </div>
  );
}

export default App;
