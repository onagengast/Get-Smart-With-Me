import React from 'react';
import PropTypes from 'prop-types';
import { createDeck } from '../actions/decksActions';
import { connect } from 'react-redux';

class CreateDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(userId, name, description) {
    event.preventDefault();
    this.props.dispatch(createDeck(userId, name, description));
  }

  render() {
    return (
      <div>
        <h2>Create a new deck</h2>
        <form onSubmit = {() => this.handleSubmit(this.props.userId, this.state.name, this.state.description)}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange= {() => this.handleNameChange(event)}/>
          </label>
          <label>
            Description:
            <input type="text" value={this.state.desription} onChange= {() => this.handleDescriptionChange(event)}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.welcome.userId,
  };
};

CreateDeck = connect(mapStateToProps)(CreateDeck);

export default CreateDeck;

CreateDeck.propTypes = {
  userId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};