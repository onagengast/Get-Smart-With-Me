import React from 'react';
import RegisterContainer from './RegisterContainer';

const AppContainer = () => {
  return (
    <div>
      <RegisterContainer />
    </div>
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
