import React from 'react';
import { NavLink } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			email: '',
			password: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
	}

	componentDidMount() {
		this.props.clearErrors();
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

	demoButton() {
		if (this.props.navType === '/login') {
			return (
				<button onClick= { this.handleDemo } className= 'demo-button'>Demo
				</button>
			)
		}
	}

	handleDemo(e) {
		e.preventDefault();
		const user = { username: 'Guest', password: 'Password' }
		this.props.signup( user );
	}

	renderErrors() {

		if (this.props.errors) {
	    return (
	    	<ul>
		      { this.props.errors.map( (error, i) => (
		        <li key={`${i}`}>
		          { error }
		        </li>
		      )) }
		    </ul>
		  )			
		}
	}

  emailInput() {
    if (this.props.navType != '/login') {
      return (
    		<label>Email:
          <input type="email"
            value={ this.state.email }
            onChange={ this.handleChange('email') }
            />
        </label>
      );
    }
  }

	render() {
		return (
			<div className= 'landing-page'>
				<div className= 'session-form-container'>

	        <form onSubmit={this.handleSubmit} className= 'session-form'>

	          <div>
			  			<div className= 'session-head'>
			  				<NavLink to="/login" className='nav-link'>Log In</NavLink> | <p>Join</p>
			  			</div>
		        </div>

		        <div className= 'error-handling'>
		          { this.renderErrors() }
		        </div>

	          <div className= 'session-form'>
	            
	            <label>Username:
			          <input
			          type="text"
			          value={ this.state.username }
			          onChange={ this.handleChange('username') }
			          />
			        </label>

	          	<div>
				    		<label>Email:
				          <input type="email"
				            value={ this.state.email }
				            onChange={ this.handleChange('email') }
				            />
				        </label>
	          	</div>
	            
	            <label>Password:
	              <input type="password"
	                value={ this.state.password }
	                onChange={ this.handleChange('password') }
	                />
	            </label>
	            
	            <input type="submit" value="Submit" className= 'submit-button'/>
	          </div>
	        </form>

	        { this.demoButton() }
				</div>
			</div>
		)
	}
};

export default SessionForm;