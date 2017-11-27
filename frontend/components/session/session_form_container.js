import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
	loggedIn: Boolean(state.session.user),
	errors: state.errors.errors
});

const mapDispatchToProps = dispatch => ({
	signup: (user) => dispatch( signup(user) ),
	login: (user) => dispatch( login(user) )
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm));