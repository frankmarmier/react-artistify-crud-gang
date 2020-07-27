import React from 'react';
import UserContext from './UserContext';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ ...rest }) => {
  return (
    <UserContext.Consumer>
      {(context) => {
        if (context.isLoading) {
          return <div>Loading...</div>;
        }
        if (context.user) {
          return <Route {...rest} />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    </UserContext.Consumer>
  );
};

export default ProtectedRoute;
