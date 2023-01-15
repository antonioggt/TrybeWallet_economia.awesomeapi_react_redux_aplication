import React from 'react';
import { screen } from '@testing-library/react';
import Wallet from '../../pages/Wallet';
import { renderWithRouterAndRedux } from './renderWith';

describe('Testa o componente Header da aplicação', () => {
  test('Testa se a tela Wallet é renderizada corretamente', () => {
    renderWithRouterAndRedux(<Wallet />, { initialEntries: ['/carteira'] });

    const descriçãoTb = screen.getByRole('columnheader', { name: /descrição/i });
    const tagTb = screen.getByRole('columnheader', { name: /tag/i });
    const metodoTb = screen.getByRole('columnheader', { name: /método de pagamento/i });
    const valorTb = screen.getByRole('columnheader', { name: 'Valor' });
    const moedaTb = screen.getByRole('columnheader', { name: 'Moeda' });
    const cambioTb = screen.getByRole('columnheader', { name: /câmbio utilizado/i });
    const valorConvertidoTb = screen.getByRole('columnheader', { name: /valor convertido/i });
    const moedaDeConversãoTb = screen.getByRole('columnheader', { name: /moeda de conversão/i });
    const editarTb = screen.getByRole('columnheader', { name: /editar\/excluir/i });
    expect(descriçãoTb).toBeInTheDocument();
    expect(tagTb).toBeInTheDocument();
    expect(metodoTb).toBeInTheDocument();
    expect(valorTb).toBeInTheDocument();
    expect(moedaTb).toBeInTheDocument();
    expect(cambioTb).toBeInTheDocument();
    expect(valorConvertidoTb).toBeInTheDocument();
    expect(moedaDeConversãoTb).toBeInTheDocument();
    expect(editarTb).toBeInTheDocument();
  });
});
