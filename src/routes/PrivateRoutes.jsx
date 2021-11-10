import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute =  ({ component: Component, authed , ...rest }) => {

    return (
        <Route
            {...rest}
            render = {(props) => authed ? <Component {...props} />
                    : <Redirect  to={{pathname: '/welcome', state:{from: props.location}}}/> }
        >
        </Route>
    );
};

export default PrivateRoute;