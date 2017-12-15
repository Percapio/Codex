import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
	signup, 
	login,
	clearErrors } from '../../actions/session_actions';

import Session from './session';

const mapStateToProps = state => ({
	loggedIn: Boolean(state.session.user),
	errors: state.errors.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	signup: user => dispatch(signup(user)),
	login: user => dispatch(login(user)),
	clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Session));