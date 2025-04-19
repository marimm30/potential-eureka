import React from 'react';
import './App.css';


class Usuario extends React.Component {

/*Trocar o this.state pelo useState() - mais adequado ao projeto

  constructor(props){
    super(props)
    this.state ={
      email: 'eduardo.lino@pucpr.br',
      senha: '123456'
    }}}*/


function App() {
  
  return (
    <div>
      <h1 title="Login"/>
      <input type="email" id="email" value = {this.state.nome} placeholder="E-mail"/>
      <input type="password" id="password" value = {this.state.senha} placeholder="Senha"/>
      <button>Acessar</button>
   </div>
  );
}



export default App;

