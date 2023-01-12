import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email, idToEdit, currencies } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          Email:
          { email }
        </p>
        <p data-testid="total-field">
          Despesa Total:
          { idToEdit }
        </p>
        <p data-testid="header-currency-field">
          Câmbio:
          { currencies }
        </p>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  idToEdit: PropTypes.string.isRequired,
  currencies: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  idToEdit: state.wallet.idToEdit,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Wallet);
