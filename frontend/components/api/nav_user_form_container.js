import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import NavUserForm from './nav_user_form';

const mapStateToProps = state => ({
	session: state.session
});

const mapDispatchToProps = ( dispatch, ownProps ) => {
	const sessionType = ownProps.location.pathname.slice(1);
	const processUser = (sessionType === 'login') ? login : signup;

	return {
		processUser: user => dispatch(processUser(user)),
		sessionType
	};
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(NavUserForm));