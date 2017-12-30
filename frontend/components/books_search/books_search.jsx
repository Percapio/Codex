import React from 'react';
import onClickOutside from 'react-onclickoutside';
import SearchIndex from './search_index';

class BooksSearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchParams: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.clearState = this.clearState.bind(this);
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
		this.setState({
			searchParams: '',
		});
	}

	render() {
		let options = { bookshelves: this.props.bookshelves }

		return (
			<div className= 'books-search-mid'>
				<input 
					onChange= { this.handleChange }
					type= 'text'
					placeholder= 'Search book by title or author'
					value= { this.state.searchParams }
					className= 'search-input' />
				<SearchIndex 
					user= { this.props.user }
					searchParams= { this.state.searchParams }
					searchResults= { Object.values(this.props.searchResults) }
					bookshelves= { this.props.bookshelves }
					handleSearch= { this.props.handleSearch }
					options= { options } />
			</div>
		)
	}
}

export default onClickOutside(BooksSearch);