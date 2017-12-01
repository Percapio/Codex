import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
	return(
		<div className= 'side-book-wrap'>
			<div className= 'side-book-container'>
				<NavLink 
					to= { `/api/books/5` }
					className= 'side-splash'>
					
					<img 
						src= "https://images-na.ssl-images-amazon.com/images/I/610KU5avW4L.jpg"
						alt= 'some random book'
						className= 'side-book'
						/>
				</NavLink>
			</div>
		</div>
	)
}