import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookIndex from './book_index';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
	
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(BookIndex));