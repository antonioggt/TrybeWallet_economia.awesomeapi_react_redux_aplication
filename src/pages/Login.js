import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../redux/actions';

const MagicNum = 6;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  handleChanges = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      const { email, password } = this.state;

      const isValid = password.length < MagicNum
      || !email.includes('@', 1)
      || !email.includes('.com', 1);
      console.log(isValid);

      this.setState({
        isDisabled: isValid,
      });
    });
  };

  handleLoginBtn = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;

    dispatch(login(email));
    history.push('/carteira');
  };

  render() {
    const { isDisabled } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          name="email"
          type="email"
          placeholder="Digite seu E-mail aqui"
          onChange={ this.handleChanges }
        />
        <input
          data-testid="password-input"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          onChange={ this.handleChanges }
        />
        <button
          type="button"
          onClick={ this.handleLoginBtn }
          disabled={ isDisabled }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
