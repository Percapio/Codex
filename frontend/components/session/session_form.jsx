import React from 'react';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: 'Name',
			email: 'Email Address',
			password: 'Password'
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
			<div className= 'landing-page'>
				<div className= 'session-form-container'>
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
							onChange= {this.handleChange('password')} />

						<input type= 'submit' value= 'Submit'/>
					</form>
				</div>
			</div>
		)
	}
};

export default SessionForm;