import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';

import LoginForm from './login_form';

const mapStateToProps = state => ({
	loggedIn: Boolean(state.session.user),
	errors: state.errors.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	login: user => dispatch(login(user)),
	clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm));
