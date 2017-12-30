import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './login';
import SignUp from './signup';
import NavUserFormContainer from '../api/nav_user_form_container';

export default class Session extends React.Component {
	render() {
		let session;

		if (this.props.location.pathname === '/login') {
			session = <Login
									loggedIn= { this.props.loggedIn }
									errors= { this.props.errors }
									login= { this.props.login }
									clearErrors= { this.props.clearErrors } />
		} else {
			session = <SignUp
									loggedIn= { this.props.loggedIn }
									errors= { this.props.errors }
									signup= { this.props.signup }
									clearErrors= { this.props.clearErrors } />				
		}

		return(
			<div>
				<NavUserFormContainer />

				<div className= 'landing-page'>
					{ session }
				</div>
			</div>
		)
	}
}
