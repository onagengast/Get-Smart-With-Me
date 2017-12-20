import React from 'react';
import PropTypes from 'prop-types';
import {
  fetchDecks
} from '../actions/decksActions';
import { connect } from 'react-redux';
import Home from '../components/Home';
import CreateDeck from '../components/CreateDeck';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchDecks(this.props.userId));
  }

  render() {
    return (
      <div>
        <Home
          decks = {this.props.decks}
        />
        <CreateDeck />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.welcome.userId,
    decks: state.decks.decks
  };
};

HomeContainer = connect(mapStateToProps)(HomeContainer);

export default HomeContainer;

HomeContainer.propTypes = {
  userId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  decks: PropTypes.array.isRequired
};
