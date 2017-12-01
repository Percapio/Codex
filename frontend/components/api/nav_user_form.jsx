import React from 'react';
import { NavLink } from 'react-router-dom';

class NavUserForm extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.logout();
	}

	render() {

		if ((this.props.sessionType === '/') || (this.props.sessionType === '/login')) {
			return (
				<div className= 'nav-bar'>
					<NavLink to= { `/` }>Codex</NavLink>
					<div className= 'user-form-container' />
				</div>
			)
		} else {
			let name = this.props.user.username.toUpperCase();
			return (
				<div className= 'nav-bar'>
					<NavLink to= { `/login` }>Codex</NavLink>

					<h1>WELCOME, { name }!</h1>

					<div className= 'user-form-container'>
						<div className= 'nav-links'>
							<i className= "fa fa-bell fa-lg" aria-hidden="true"></i>
							<i className= "fa fa-weixin fa-lg" aria-hidden="true"></i>
							<i className= "fa fa-envelope-open fa-lg" aria-hidden="true"></i>
							<i className= "fa fa-user-plus fa-lg" aria-hidden="true"></i>
							<i className= "fa fa-user-circle-o fa-lg" aria-hidden="true">
								<ul className= "signout-dropdown">
									<li onClick= {this.handleClick}>Sign Out</li>
								</ul>
							</i>
						</div>
					</div>
				</div>
			)
		}
	}
};

export default NavUserForm;