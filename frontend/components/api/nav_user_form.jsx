import React from 'react';

class NavUserForm extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	//todo add history push
	handleClick(e) {
		e.preventDefault();
		this.props.logout()
			.then(this.props.history.push('/'));
	}

	render() {

		if ((this.props.sessionType != '/') && (this.props.sessionType != '/login')) {
			return (
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
			)
		} else {
			return (
				<div className= 'user-form-container' />
			)
		}
	}
};

export default NavUserForm;