import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ book, bookId, clearState }) => (
	<li onClick= { clearState } className= 'search-item'>
		<NavLink to= { `/api/books/${ bookId }` }>
			<p>{ book.title }</p>
		</NavLink>
	</li>
)
