import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ book }) => (
	<li className= 'book-info' >
		<NavLink to= { `/api/books/${book.id}` } className= 'book-splash'>
			<img 
				src= { book.img_url }
				alt= 'some random book'/>
		</NavLink>

		<div className= 'book-review'>
			<NavLink to= { `/api/books/${book.id}` } className= 'book-nav'>
				<div className= 'book-label'>
					<h4>{ book.title }</h4>
					<p>by { book.author }</p>
				</div>
			</NavLink>

			<div>
				<div className= 'book-summary'>{ book.summary }</div>
			</div>

			<div className= 'book-stars'>
				<div className= 'stars'>
					<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
					<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
					<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
					<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
					<i className= "fa fa-star-o fa-lg" aria-hidden="true"></i>
				</div>

				<div>

				</div>
			</div>
					
			<hr />
		</div>

	</li>
);