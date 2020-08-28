import React from 'react';
import AppContainer from './AppContainer';
import DevTools from './DevTools';

const Root = () => {
  return (
    <div>
      <AppContainer />
      <DevTools />
    </div>
  );
};

export default Root;

// Root.propTypes = {
//   store: PropTypes.object.isRequired
// };
