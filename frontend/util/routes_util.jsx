import React from 'react';
import SessionFormContainer from '../components/session/session_form_container';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
	loggedIn: Boolean(state.session.user),
	user: state.session.user
});

const Auth = ({ user, loggedIn, path, component: Component }) => (
	<Route
		path= { path }
		render= { props => (
			loggedIn ? <Redirect to= {`/user/${user.id}`} /> : <Component {...props} />
		)}
	/>
);

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
	} else {
		return (
			<Redirect
				to= '/'
				render= { props => (
					<SessionFormContainer {...props} />
				)}
			/>
		)
	}
};


export const AuthRoute = withRouter(
	connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(
	connect(mapStateToProps, null)(Protected));