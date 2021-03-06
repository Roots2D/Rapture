import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn, defaultChannel}) => (
  <Route path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={'/channels'} />
      )
    )}/>
);
// SET DEFAULT CHANNEL IN STATE

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
);

const mapStateToProps = state => {


  return {
    loggedIn: Boolean(state.session.currentUser),
    // defaultChannel: state.session.currentUser &&
    //   state.session.currentUser.channelSubs[0]
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
