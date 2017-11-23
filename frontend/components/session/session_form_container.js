import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = state => ({
	session: state.session
});

const mapDispatchToProps = dispatch => ({
		signup: (user) => dispatch( signup(user) )
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(SessionForm));