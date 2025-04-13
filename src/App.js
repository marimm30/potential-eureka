import React from 'react';
import './App.css';
import ReactDom from 'react-dom';
import Popup from 'reactjs-popup';


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
      if (email | senha != this.state){
        Popup.alert('Usuário ou senha incorretos!')
      }
      else{
        Popup.alert('Acessado com sucesso!')
      }

    </div>
  );
}

export default App;

