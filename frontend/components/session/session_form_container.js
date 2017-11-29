import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
	signup,
	login,
	clearErrors } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = state => ({
	loggedIn: Boolean(state.session.user),
	errors: state.errors.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
	const navType = ownProps.location.pathname;
	const navAction = (navType === '/') ? signup : login;

	return {
		navType,
		navAction: user => dispatch(navAction(user)),
		clearErrors: () => dispatch(clearErrors())
	};
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm));