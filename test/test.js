import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Testes da tela de login', () => {

  test('deve renderizar inputs de email e senha e botão Acessar', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(screen.getByText('Acessar')).toBeInTheDocument();
  });

  test('deve exibir mensagem de erro se clicar em acessar sem preencher campos', () => {
    render(<App />);
    const botao = screen.getByText('Acessar');
    fireEvent.click(botao);
    expect(screen.getByText('Preencha todos os campos!')).toBeInTheDocument();
  });

  test('deve exibir mensagem de sucesso com email e senha corretos', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('E-mail'), { target: { value: 'mariliz.machado@pucpr.edu.br' } });
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: '123456' } });
    fireEvent.click(screen.getByText('Acessar'));
    expect(screen.getByText('Acessado com sucesso!')).toBeInTheDocument();
  });

  test('deve exibir mensagem de erro com email incorreto', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('E-mail'), { target: { value: 'errado@email.com' } });
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: '123456' } });
    fireEvent.click(screen.getByText('Acessar'));
    expect(screen.getByText('Usuário ou senha incorretos!')).toBeInTheDocument();
  });

  test('deve exibir mensagem de erro com senha incorreta', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('E-mail'), { target: { value: 'mariliz.machado@pucpr.edu.br' } });
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: 'senhaerrada' } });
    fireEvent.click(screen.getByText('Acessar'));
    expect(screen.getByText('Usuário ou senha incorretos!')).toBeInTheDocument();
  });

});
