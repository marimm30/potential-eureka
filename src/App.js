import React, { useState } from 'react'; /*retificado a forma de importação*/
import './App.css';


function App() {
  const[email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const[mensagem, setMensagem] = useState('');/*corrigido */
  const[tipoMens, setTipoMens] = useState('');
  const usuarioCadastrado = {
    email: 'mariliz.machado@pucpr.edu.br',
    senha: '123456'
  }

  const handleLogin = () => {
    if (!email || !senha) {      /* para alertar de informação faltando */
      setMsg('Preencha todos os campos!');  
      setTipoMsg('erro');
      return;
    }
    if (email === loginCorreto.email && senha === loginCorreto.senha) {
      setMsg('Acessado com sucesso!');
      setTipoMsg('sucesso');
    } else {
      setMsg('Usuário ou senha incorretos!');
      setTipoMsg('erro');
    }
  };
  
  
  return (
    <div>
     <h1 title="Login"/>

     <input type="email" id="email" value = {email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>

     <input type="password" id="password" value = {senha} placeholder="Senha"onChange={(e) => setSenha(e.target.value)}/>

     <button>Acessar</button>
     </div>
     );

}

export default App;
