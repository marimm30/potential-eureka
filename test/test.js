import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Testes da tela de login', () => {
  const emailValido = 'mariliz.machado@pucpr.edu.br';
  const senhaValida = '123456';
  const erroCampos = 'Preencha todos os campos!';
  const sucessoLogin = 'Acessado com sucesso!';
  const erroLogin = 'Usuário ou senha incorretos!';

  beforeEach(() => {
    render(<App />);
  }); 

  test('deve renderizar inputs de email e senha e botão Acessar', () => {
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /acessar/i })).toBeInTheDocument();
  });

  test('deve exibir mensagem de erro se clicar em acessar sem preencher campos', () => {
    fireEvent.click(screen.getByRole('button', { name: /acessar/i }));
    expect(screen.getByText(erroCampos)).toBeInTheDocument();
  });

  test('deve exibir mensagem de sucesso com email e senha corretos', () => {
    fireEvent.change(screen.getByPlaceholderText('E-mail'), { target: { value: emailValido } });
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: senhaValida } });
    fireEvent.click(screen.getByRole('button', { name: /acessar/i }));
    expect(screen.getByText(sucessoLogin)).toBeInTheDocument();
  });

  test('deve exibir mensagem de erro com email incorreto', () => {
    fireEvent.change(screen.getByPlaceholderText('E-mail'), { target: { value: 'errado@email.com' } });
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: senhaValida } });
    fireEvent.click(screen.getByRole('button', { name: /acessar/i }));
    expect(screen.getByText(erroLogin)).toBeInTheDocument();
  });

  test('deve exibir mensagem de erro com senha incorreta', () => {
    fireEvent.change(screen.getByPlaceholderText('E-mail'), { target: { value: emailValido } });
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: 'senhaerrada' } });
    fireEvent.click(screen.getByRole('button', { name: /acessar/i }));
    expect(screen.getByText(erroLogin)).toBeInTheDocument();
  });
});
