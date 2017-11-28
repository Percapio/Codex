import React from 'react';

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

		if ((this.props.sessionType != '/signup') && (this.props.sessionType != '/login')) {
			return (
				<div className= 'user-form-container'>
					<div className= 'nav-links'>
						<i className= "fa fa-bell fa-lg" aria-hidden="true"></i>
						<i className= "fa fa-weixin fa-lg" aria-hidden="true"></i>
						<i className= "fa fa-envelope-open fa-lg" aria-hidden="true"></i>
						<i className= "fa fa-user-plus fa-lg" aria-hidden="true"></i>
						<i className= "fa fa-user-circle-o fa-lg" aria-hidden="true" onClick= {this.handleClick}></i>
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