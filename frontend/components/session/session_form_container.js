import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
// import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = state => ({
	session: state
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
		signup: () => dispatch( signup() ),
		logout: () => dispatch( logout() ),
		login: () => dispatch( login() )
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm);