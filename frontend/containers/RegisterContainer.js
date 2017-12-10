import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  register
} from '../actions/registrationActions';
// import Register from '../components/Register';

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password1: '',
      password2: '',
      error: ''
    };
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePassword1Change(event) {
    this.setState({password1: event.target.value});
  }

  handlePassword2Change(event) {
    this.setState({password2: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password1 !== this.state.password2) {
      this.setState({error: 'Passwords do not match'});
    } else {
      this.props.dispatch(register(this.state.username, this.state.password1));
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={() => this.handleSubmit(event)}>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={() => this.handleUsernameChange(event)} />
          </label>
          <label>
            Enter password:
            <input type="text" value={this.state.password1} onChange={() => this.handlePassword1Change(event)} />
          </label>
          <label>
            Verify password:
            <input type="text" value={this.state.password2} onChange={() => this.handlePassword2Change(event)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2>{this.state.error}</h2>
      </div>
    );
  }
}

export default connect()(RegisterContainer);

RegisterContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};