import { connect } from 'react-redux';
import { selectAllErrors } from '../../selectors/selectors';
import App from '../../app';

const mapStateToProps = state => ({
	errors: selectAllErrors(state)
});

export default connect(mapStateToProps, null)(App);