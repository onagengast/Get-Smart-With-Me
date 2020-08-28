import React from 'react';
import RegisterContainer from './RegisterContainer';
import LoginContainer from './LoginContainer';
import { Switch, Route } from 'react-router';
import HomeContainer from './HomeContainer';

const AppContainer = () => {
  return (
    <Switch>
      <Route exact path="/" component={RegisterContainer}/>
      <Route path="/home" component={HomeContainer}/>
      <Route path="/login" component={LoginContainer}/>
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
