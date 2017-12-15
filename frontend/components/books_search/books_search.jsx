import React from 'react';
import onClickOutside from 'react-onclickoutside';
import SearchIndex from './search_index';

class BooksSearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchParams: ''
		};

		this.results;

		this.clearState = this.clearState.bind(this);
		this.handleChange = this.handleChange.bind(this);
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

	componentWillReceiveProps(nextProps) {
		let results = Object.values(nextProps.searchResults);
		let searchBox;
		if(results.length > 0) {
			searchBox = results.map (
				book => <SearchIndex
									key= { book.ISBN }
									book= { book }
									searchParams= { this.state.searchParams } />
			)

		this.results =
			<div className= 'search-box'>
				<ul className= 'search-results'>
					{ searchBox }
				</ul>
			</div>
		}
	}

	render() {
		return (
			<div className= 'books-search-mid'>
				<input 
					onChange= { this.handleChange }
					type= 'text'
					placeholder= 'Search book by title, author, or ISBN'
					value= { this.state.searchParams } />
				{ this.results }
			</div>
		)
	}
}

export default onClickOutside(BooksSearch);