import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import Login from '../../pages/Login';
import App from '../../App';

const EMAILEX = 'teste@teste.com';
const PASSEX = 'soutryber';
const EMAILTESTID = 'email-input';
const PASSTESTID = 'password-input';

describe('Testa a página de login da aplicação', () => {
  it('Testa se o endpoint está correto ao renderizar a primeira vez', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('Testa se o input de email está renderizado na tela', () => {
    renderWithRouterAndRedux(<Login />);

    const emailInput = screen.getByTestId(EMAILTESTID);
    expect(emailInput).toBeInTheDocument();
  });

  it('Testa se o input de senha está renderizado na tela', () => {
    renderWithRouterAndRedux(<Login />);

    const passInput = screen.getByTestId(PASSTESTID);
    expect(passInput).toBeInTheDocument();
  });

  it('Testa se o botão de entrar está renderizado na tela inicialmente desabilitado', () => {
    renderWithRouterAndRedux(<Login />);

    const enterBtn = screen.getByRole('button', {
      name: /entrar/i,
    });
    expect(enterBtn).toBeInTheDocument();
    expect(enterBtn).toBeDisabled();
  });

  it('Testa se ao escrever no input de senha a validação está sendo realizada corretamente', () => {
    renderWithRouterAndRedux(<Login />);

    const passInput = screen.getByTestId(PASSTESTID);
    expect(passInput).toBeInTheDocument();
    userEvent.type(passInput, PASSEX);
    expect(passInput).toHaveValue('soutryber');
  });

  it('Testa se ao escrever no email a validação está sendo realizada corretamente', () => {
    renderWithRouterAndRedux(<Login />);

    const emailInput = screen.getByTestId(EMAILTESTID);
    expect(emailInput).toBeInTheDocument();
    userEvent.type(emailInput, EMAILEX);
    expect(emailInput).toHaveValue(EMAILEX);
  });

  it('Testa se a senha for digitada incorretamente o botão de entrar permanece desabilitado', () => {
    renderWithRouterAndRedux(<Login />);

    const emailInput = screen.getByTestId(EMAILTESTID);
    const passInput = screen.getByTestId(PASSTESTID);
    userEvent.type(emailInput, EMAILEX);
    userEvent.type(passInput, '12345');
    const enterBtn = screen.getByRole('button', {
      name: /entrar/i,
    });
    expect(enterBtn).toBeDisabled();
  });

  it('Testa se ao clicar no botão de entrar está sendo redirecionado para a página correta', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId(EMAILTESTID);
    const passInput = screen.getByTestId(PASSTESTID);
    userEvent.type(emailInput, EMAILEX);
    userEvent.type(passInput, PASSEX);
    const enterBtn = screen.getByRole('button', {
      name: /entrar/i,
    });
    userEvent.click(enterBtn);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
