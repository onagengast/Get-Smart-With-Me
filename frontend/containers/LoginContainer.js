import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  login
} from '../actions/welcomeActions';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(login(this.state.username, this.state.password));
  }

  render() {
    return (
      <div>
        <form onSubmit={() => this.handleSubmit(event)}>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={() => this.handleUsernameChange(event)} />
          </label>
          <label>
            Enter password:
            <input type="text" value={this.state.password} onChange={() => this.handlePasswordChange(event)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2>{this.props.error}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.welcome.error
  };
};

LoginContainer = connect(mapStateToProps)(LoginContainer);
export default LoginContainer;

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};