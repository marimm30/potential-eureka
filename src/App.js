import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [msg, setMsg] = useState('');
  const [tipoMsg, setTipoMsg] = useState('');

  const usuarioCadastrado = {
    email: 'mariliz.machado@pucpr.edu.br',
    senha: '123456'
  };

  const msgLogin = () => {
    if (!email || !senha) {
      setMsg('Preencha todos os campos!');
      setTipoMsg('erro');
      return;
    }

    if (email === usuarioCadastrado.email && senha === usuarioCadastrado.senha) {
      setMsg('Acessado com sucesso!');
      setTipoMsg('sucesso');
    } else {
      setMsg('Usuário ou senha incorretos!');
      setTipoMsg('erro');
    }
  };
  /*Edit: adicionada a opção de criar uma conta se não tiver cadastro*/
  return (
  <div className="login-box">
      <h1 title="Login">Login</h1>

     <input type="email" id="email" value = {email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>

     <input type="password" id="password" value = {senha} placeholder="Senha"onChange={(e) => setSenha(e.target.value)}/>

     <button onClick={msgLogin}>Acessar</button>
     <p>Não tem conta?Cadastre-se</p>   
     {msg && (
        <p className={tipoMsg === 'erro' ? 'mensagem-erro' : 'mensagem-sucesso'}>
          {msg}
        </p>
      )}
    </div>
     );

}

export default App;
