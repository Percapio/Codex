import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import NavUserForm from './nav_user_form';

const mapStateToProps = state => ({
	user: state.sessionReducer.user,
	errors: state.errorsReducer.errorsReducer
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
	sessionType: ownProps.location.pathname,
	login: user => dispatch(login(user)),
	logout: () => dispatch(logout()),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(NavUserForm));