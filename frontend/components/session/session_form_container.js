import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = state => ({
	session: state.session
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
		signup: (user) => dispatch( signup(user) ),
		logout: (user) => dispatch( logout(user) ),
		login: () => dispatch( login() )
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm));