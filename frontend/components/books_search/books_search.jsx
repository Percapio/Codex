import React from 'react';
import onClickOutside from 'react-onclickoutside';
import SearchIndex from './search_index';

class BooksSearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchParams: ''
		};

		this.clearState = this.clearState.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	handleChange(e) {
		e.preventDefault();

		const params = e.target.value;
		this.setState({ searchParams: params }, () => (
			this.props.searchBooksDatabase(this.state.searchParams))
		);
	}

	handleClickOutside() {
		this.clearState();
	}

	clearState() {
		this.setState({ searchParams: '' });
	}

	render() {
		return (
			<div className= 'books-search-mid'>
				<input 
					onChange= { this.handleChange }
					type= 'text'
					placeholder= 'Search book by title or author'
					value= { this.state.searchParams } />
				<SearchIndex 
					searchParams= { this.state.searchParams }
					searchResults= { Object.entries(this.props.searchResults) }
					clearState= { this.clearState } />
			</div>
		)
	}
}

export default onClickOutside(BooksSearch);