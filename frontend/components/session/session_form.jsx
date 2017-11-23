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
		const user = this.state;
		this.props.signup( user )
			.then( () => this.props.history.push('/') );
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
					<label>
						<input
							type= 'text'
							value= 'Name'
							onChange= {this.handleChange('username')} />
					</label>

					<label>
						<input
							type= 'email'
							value= 'Email Address'
							onChange= {this.handleChange('email')} />
					</label>

					<label>
						<input
							type= 'password'
							onChange= {this.handleChange('password')} />
					</label>

					<input type= 'submit' value= 'Submit'/>
				</form>
			</div>
		)
	}
};

export default SessionForm;