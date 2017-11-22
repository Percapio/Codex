import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';

const mapStateToProps = state => ({
	session: state
});

const mapDispatchToProps = ( dispatch, ownProps ) => ({
		logout: () => dispatch( logout() ),
		login: () => dispatch( login() )
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm)