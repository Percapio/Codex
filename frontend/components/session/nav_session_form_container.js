import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import NavSessionForm from './nav_session_form';

const mapStateToProps = state => ({
	session: state.session
});

const mapDispatchToProps = ( dispatch, ownProps ) => {
	const sessionType = ownProps.location.pathname.slice(1);
	const processSession = (sessionType === 'login') ? login : signup;

	return {
		processSession: user => dispatch(processSession(user)),
		sessionType
	};
};

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(NavSessionForm));