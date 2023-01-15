import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses, isLoading } = this.props;
    let variavel = 0;
    return (
      <div>
        <p data-testid="email-field">
          { `Email: ${email}` }
        </p>
        {expenses.forEach((e) => {
          const currencyH = e.currency;
          const valueH = e.value;
          const exchangeH = e.exchangeRates[currencyH].ask;
          variavel += valueH * exchangeH;
        })}
        <h3>Despesa Total:</h3>
        <p data-testid="total-field">{ variavel.toFixed(2) }</p>
        <p data-testid="header-currency-field">BRL</p>
        {
          isLoading && <h1>Carregando, aguarde.</h1>
        }
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  isLoading: state.wallet.isLoading,
});

export default connect(mapStateToProps)(Header);
