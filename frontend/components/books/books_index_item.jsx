import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ book }) => (
	<li className= 'book-info' >
		<NavLink to= { `/api/books/${book.id}` } className= 'book-splash'>
			<div className= 'book-image'>
				<img src= 'http://cdn.hbowatch.com/wp-content/uploads/2012/01/A-Game-of-Thrones-book-Cover-NOvel.jpg' alt= 'some random book'/>
			</div>
		</NavLink>

		<div className= 'book-review'>
			<div className= 'book-label'>
				<h4>{ book.title }</h4>
				<p>by { book.author }</p>
			</div>

			<div className= 'book-summary'>
				{ book.summary }
			</div>

			<div className= 'book-stars'>
				<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
				<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
				<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
				<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
				<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
			</div>
					
			<hr />
		</div>

	</li>
);