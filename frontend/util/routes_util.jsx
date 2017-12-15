import React from 'react';
import { connect } from 'react-redux';
import { 
	Redirect, 
	Route, 
	withRouter 
} from 'react-router-dom';

const mapStateToProps = (state) => ({
	loggedIn: Boolean(state.session.user),
	user: state.session.user
});

const Auth = ({ user, loggedIn, path, component: Component }) => {
	return(
		<Route
			path= { path }
			render= { props => 
				loggedIn ? <Redirect to= { `/${user.username}` } /> : <Component {...props} /> }
		/>
	)
};

const Protected = ({ loggedIn, path, component: Component }) => {
	if (loggedIn) {
		return (
			<Route
				path= { path }
				render= { props => (
					<Component {...props} />
				)}
			/>
		)
	}	else {
			return (
				<Redirect to= '/login' />
			)
	}
};

export const AuthRoute = withRouter(
	connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(
	connect(mapStateToProps, null)(Protected));