import React from 'react';
import RegisterContainer from './RegisterContainer';
import { Switch, Route } from 'react-router';
import Home from '../components/Home';

const AppContainer = () => {
  return (
    <Switch>
      <Route exact path="/" component={RegisterContainer}/>
      <Route path="/home" component={Home}/>
    </Switch>
  );
};

export default AppContainer;

// AppContainer.propTypes = {
//     name: PropTypes.string,
// };

// const mapStateToProps = (state) => {
//     return {
//         name: state.name
//     };
// };

// const mapDispatchToProps = (/* dispatch */) => {
//   return {
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(AppContainer);
