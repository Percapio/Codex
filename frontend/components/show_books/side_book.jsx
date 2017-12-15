import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ book }) => {
	return(
		<div className= 'side-book-wrap'>
			<div className= 'side-book-container'>
				<NavLink 
					to= { `/api/books/${ book.id }` }
					className= 'side-splash'>
					
					<img 
						src= { book.img_url }
						alt= 'some random book'
						className= 'side-book'
						/>
				</NavLink>
			</div>
		</div>
	)
}