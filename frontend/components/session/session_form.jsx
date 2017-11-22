import React from 'react';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			email: '',
			password: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state
		this.props.signup(user);
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.target.value
		});
	}

	render() {
		return (
			<div className= 'login-form-container'>
				<form className= 'login-form' onSubmit= {this.handleSubmit}>
					<label>Username:
						<input
							type= 'text'
							value= {this.state.username}
							onChange= {this.handleChange('username')} />
					</label>

					<label>Email:
						<input
							type= 'text'
							value= {this.state.email}
							onChange= {this.handleChange('email')} />
					</label>

					<label>Password:
						<input
							type= 'password'
							value= {this.state.password}
							onChange= {this.handleChange('password')} />
					</label>

					<input type= 'submit' value= 'Submit'/>
				</form>
			</div>
		)
	}
};

export default SessionForm;