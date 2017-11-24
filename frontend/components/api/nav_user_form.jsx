import React from 'react';

class NavUserForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: 'Name',
			password: 'password'
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.login(this.state);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.logout();
	}

	handleDemo(e) {
		e.preventDefault();
		const user = { username: 'Name', password: 'Password' }
		this.props.login(user);
	}

	renderErrors() {
		return (
			<ul>
				{ this.props.errorsReducer.map( (error, idx) => (
					<li key= {`error-${idx}`}>{ error }</li>
				))}
			</ul>
		)
	}

	render() {

		if (this.props.sessionType === '/users/show') {
			return (
				<div className= 'user-form-container'>
					<button onClick= {this.handleClick} className= 'signout-button'>Log Out
					</button>

					{ this.renderErrors() }
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

					<button onClick= {this.handleDemo} className= 'demo-button'>Guest User
					</button>
				</div>
			)
		}
	}
};

export default NavUserForm;