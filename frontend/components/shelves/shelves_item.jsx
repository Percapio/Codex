import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ shelf }) => {
	return(
		<li>
			<NavLink 
				to= { `/api/books/${shelf.id}` }
				className= 'shelf-splash'
				{ ...{ shelf } }>
				
				<img 
					src= { shelf.img_url }
					alt= 'some random book'
					/>
			</NavLink>
		</li>
	)
};