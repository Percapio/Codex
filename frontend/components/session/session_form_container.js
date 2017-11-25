import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
	return {
		loggedIn: Boolean(state.sessionReducer.user),
		errors: state.errorsReducer.errorsReducer
	}
};

const mapDispatchToProps = dispatch => ({
	signup: (user) => dispatch( signup(user) ),
	login: (user) => dispatch( login(user) )
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm));