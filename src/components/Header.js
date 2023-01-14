import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalField, isLoading } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          Email:
          {' '}
          { email }
        </p>
        Despesa Total:
        <p data-testid="total-field">
          { totalField }
        </p>
        <p data-testid="header-currency-field">
          Câmbio:
          {' '}
          BRL
        </p>
        {
          isLoading && <h1>Carregando, aguarde.</h1>
        }
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalField: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalField: state.wallet.totalField,
  isLoading: state.wallet.isLoading,
});

export default connect(mapStateToProps)(Header);
