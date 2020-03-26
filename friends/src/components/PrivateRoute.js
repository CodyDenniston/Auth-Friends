import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
	//JS to take component prop out of props obj
	//rename component to Component
	return (
		<Route
			{...rest}
			render={props => {
				if (localStorage.getItem('token')) {
					//user is authed
					return <Component {...props} />;
				} else {
					//user not authed -redirect user
					return <Redirect to='/login' />;
				}
			}}
		/>
	);
};
