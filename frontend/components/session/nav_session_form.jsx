import React from 'react';

class NavSessionForm extends React.Component {
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
			[field]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.processSession(this.state)
			.then( () => this.props.history.push('/') );
	}

	handleClick(e) {
		e.preventDefault();
		this.props.processSession()
			.then( () => this.props.history.push('/') );
	}

	render() {

		if (this.props.sessionType === 'login') {
			return (
				<div className= 'signout-form-container'>
					<button onClick= {this.handleClick} className= 'signout-button'/>
				</div>
			)
		} else {
			return (
				<div className= 'signin-form-container'>
					<form onSubmit= {this.handleSubmit} className= 'signin-form'>
						<input
							type= 'text'
							value= {this.state.username}
							onChange= { this.handleChange('username') } />

						<input
							type= 'password'
							onChange= { this.handleChange('password') } />

						<button value= 'Submit'/>
					</form> 
				</div>
			)
		}
	}
}

export default NavSessionForm;