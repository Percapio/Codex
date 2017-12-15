import React from 'react';
import SearchItem from './search_item';

export default ({ searchParams, searchResults, clearState }) => {
	if (searchParams === '') return null;

	let booksUl;

	if (searchResults.length > 0) {
		let id, book;
		
		booksUl = 
			<ul className= 'search-results'>
				{ searchResults.map( pair =>
					{	
						[id, book] = pair;
						return(
							<SearchItem
								key= { book.ISBN }
								book= { book }
								bookId= { parseInt(id) }
								clearState= { clearState } /> )
					})
				}
			</ul>
	}

	return (
		<div className= 'search-box'>
			{ booksUl }
		</div>
	)
}