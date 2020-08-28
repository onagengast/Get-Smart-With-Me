import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


let Home = (props) => {
  return (
    <div>
      <h2>Made it home!</h2>
      <ul>
        {props.decks.map(deck => <li key={deck.id}>{deck.name}, {deck.description}</li>)}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  decks: state.welcome.decks;
};

Home = connect(mapStateToProps)(Home);

export default Home;

Home.propTypes = {
  decks: PropTypes.array.isRequired
};

