import React from 'react';
import { NavLink } from 'react-router-dom';

class Login extends React.Component {
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
		this.props.login( user );
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleDemo(e) {
		e.preventDefault();
		const user = { username: 'Guest', password: 'Password' }
		this.props.login( user );
	}

	renderErrors() {
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

	render() {
		return (
			<div className= 'session-form-container'>
        <form onSubmit={this.handleSubmit} className= 'session-form'>

          <div>
		  			<div className= 'session-head'>
		      		<p>Log In</p> | <NavLink to="/" className='nav-link'>Join</NavLink>
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
            
            <label>Password:
              <input type="password"
                value={ this.state.password }
                onChange={ this.handleChange('password') }
                />
            </label>
            
            <input type="submit" value="Submit" className= 'submit-button'/>
          </div>
        </form>

	      <button onClick= { this.handleDemo } className= 'demo-button'>Demo
				</button>

			</div>
		)
	}
};

export default Login;