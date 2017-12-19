import React from 'react';
import SearchItem from './search_item';

export default ({ searchParams, searchResults, handleSearch, user, bookshelves }) => {
	if (searchParams === '') return null;

	let booksUl;

	if (searchResults.length > 0) {
		booksUl = 
			<ul className= 'search-results'>
				{ searchResults.map( book =>
							<SearchItem
								key= { book.ISBN }
								book= { book }
								user= { user }
								bookshelves= { bookshelves }
								handleSearch= { handleSearch } /> )
				}
			</ul>
	}

	return (
		<div className= 'search-box'>
			{ booksUl }
		</div>
	)
}