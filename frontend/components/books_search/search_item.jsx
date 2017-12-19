import React from 'react';

export default class SearchItem extends React.Component {
	render() {
		let book = this.props.book;
		let user = this.props.user;
		let handleSearch = this.props.handleSearch;

		return(
			<li onClick= { () => handleSearch(book) } className= 'search-item'>
				<p>{ book.title }</p>
			</li>
		)
	}
}