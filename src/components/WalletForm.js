import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../redux/actions';
import fetchApiFunc from '../helpers/fetchApiFunc';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    payment: 'dinheiro',
    category: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  handleChanges = ({ target }) => {
    console.log(target);
    this.setState({ [target.name]: target.value }, () => {
    });
  };

  handleClick = async () => {
    const response = await fetchApiFunc();
    const { wallet: { expenses }, dispatch } = this.props;
    const {
      value,
      description,
      currency,
      payment,
      category,
    } = this.state;
    const infosObj = {
      id: expenses.length,
      value,
      description,
      currency,
      method: payment,
      tag: category,
      exchangeRates: await response,
    };
    dispatch({
      type: 'SAVE_INFOS',
      expenses: infosObj,
    });
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      payment: 'Dinheiro',
      category: 'Alimentação',
    });
  };

  render() {
    const { wallet: { currencies } } = this.props;
    const { value, description, currency, payment, category } = this.state;
    return (
      <form>
        <input
          data-testid="value-input"
          name="value"
          type="number"
          value={ value }
          placeholder="Despesas"
          onChange={ this.handleChanges }
        />
        <input
          data-testid="description-input"
          name="description"
          value={ description }
          type="text"
          placeholder="Descrição das despesas"
          onChange={ this.handleChanges }
        />
        <select
          data-testid="currency-input"
          onChange={ this.handleChanges }
          name="currency"
          value={ currency }
        >
          { currencies.map((e, i) => (
            <option
              key={ ` ${i} = ${e} ` }
              value={ `${e}` }
            >
              { e }
            </option>
          )) }
        </select>
        <select
          data-testid="method-input"
          name="payment"
          value={ payment }
          onChange={ this.handleChanges }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          name="category"
          value={ category }
          onChange={ this.handleChanges }
        >
          <option value="alimentaçao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Trasporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
    expenses: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

export default connect(mapStateToProps)(WalletForm);
