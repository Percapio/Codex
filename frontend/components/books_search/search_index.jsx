import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ book, searchParams }) => {
	if (searchParams === '') return null;

	return (
		<li className= 'search-item'>
			<NavLink to= { `/api/books/${ book.id }`}><p>{ book.title }</p></NavLink>
		</li>
	)
}