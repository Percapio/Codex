import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import NavUserForm from './nav_user_form';

const mapStateToProps = state => ({
	user: state.sessionReducer.user
});

const mapDispatchToProps = ( dispatch, ownProps ) => {
	const sessionType = ownProps.location.pathname;

	return {
		login: user => dispatch(login(user)),
		logout: () => dispatch(logout()),
		sessionType
	};
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(NavUserForm));