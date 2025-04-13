import React from 'react';
import './App.css';


class Usuario extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      email: 'eduardo.lino@pucpr.br',
      senha: '123456'
    }
  }
}

function ButtonAcessar() {
  return (
    <button>Acessar</button>
  );
}

function Formulario() {
  return (
      <h1 title="Login">
      <input type="email" id="email" value = {this.state.nome} placeholder="E-mail"/>
      <input type="password" id="password" value = {this.state.senha} placeholder="Senha"/>
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

