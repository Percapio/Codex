import React from 'react';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: 'Name',
			email: 'Email Address',
			password: 'password'
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.signup( user );
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleDemo(e) {
		e.preventDefault();
		const user = { username: 'Guest', password: 'Password' }
		this.props.login(user);
	}

	renderErrors() {
		return (
			<ul>
				{ this.props.errors.map( (error, idx) => (
					<li key= {`error-${idx}`}>{ error }</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className= 'landing-page'>
				<div className= 'session-form-container'>
					<div className= 'signup'>
						<h2>Sign Up</h2>
					</div>

					<form className= 'session-form' onSubmit= {this.handleSubmit}>

						<input
							type= 'text'
							value= {this.state.username}
							onChange= {this.handleChange('username')} />

						<input
							type= 'text'
							value= {this.state.email}
							onChange= {this.handleChange('email')} />

						<input
							type= 'password'
							value= {this.state.password}
							onChange= {this.handleChange('password')} />

						<input type= 'submit' value= 'Submit'/>
					</form>

					<button onClick= {this.handleDemo} className= 'demo-button'>Demo
					</button>
				</div>
			</div>
		)
	}
};

export default SessionForm;