import React from 'react';

class NavUserForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: 'Name',
			password: 'Password'
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.login(this.state)
			.then( () => this.props.history.push('/users/show') );
	}

	handleClick(e) {
		e.preventDefault();
		this.props.logout()
			.then( () => this.props.history.push('/') );
	}

	render() {

		if (this.props.sessionType === '/users/show') {
			return (
				<div className= 'user-form-container'>
					<button onClick= {this.handleClick} className= 'signout-button'>Log Out
					</button>
				</div>
			)
		} else {
			return (
				<div className= 'user-form-container'>
					<form onSubmit= {this.handleSubmit} className= 'user-form'>
						<input
							type= 'text'
							value= {this.state.username}
							onChange= { this.handleChange('username') } />
						<input
							type= 'password'
							value= {this.state.password}
							onChange= { this.handleChange('password') } />

						<button value= 'Submit'>Submit</button>
					</form> 
				</div>
			)
		}
	}
};

export default NavUserForm;