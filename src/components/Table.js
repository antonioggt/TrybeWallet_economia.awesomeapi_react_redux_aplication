import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { wallet: { expenses } } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e, i) => (
            <tr
              key={ `${i} = ${e.id}` }
            >
              <td>{ e.description }</td>
              <td>{ e.tag }</td>
              <td>{ e.method }</td>
              <td>{ (+e.value).toFixed(2) }</td>
              <td>{ e.exchangeRates[e.currency].name }</td>
              <td>{ (+e.exchangeRates[e.currency].ask).toFixed(2) }</td>
              <td>{ (+e.exchangeRates[e.currency].ask * +e.value).toFixed(2) }</td>
              <td>Reais</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.shape({
    })),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Table);
