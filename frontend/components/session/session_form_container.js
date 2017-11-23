import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
	loggedIn: Boolean(state.sessionReducer.user)
});

const mapDispatchToProps = dispatch => ({
	signup: (user) => dispatch( signup(user) )
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm));