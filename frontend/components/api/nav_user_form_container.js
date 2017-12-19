import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout } from '../../actions/session_actions';
import { selectBookshelves } from '../../selectors/selectors';

import NavUserForm from './nav_user_form';

const mapStateToProps = (state) => {
	return({
			user: state.session.user,
			errors: state.errors.errors,
			state: state,
			bookshelves: selectBookshelves(state),
		});
};

const mapDispatchToProps = ( dispatch, ownProps ) => ({
	sessionType: ownProps.location.pathname,
	login: user => dispatch(login(user)),
	logout: () => dispatch(logout()),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(NavUserForm));