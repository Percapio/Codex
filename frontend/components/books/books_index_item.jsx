import React from 'react';
import { Link } from 'react-router-dom';

export default ({ book }) => (
	<li className= 'book-info'>
		<div className= 'book-splash'>
			<div className= 'book-title'>
				<img src= 'http://cdn.hbowatch.com/wp-content/uploads/2012/01/A-Game-of-Thrones-book-Cover-NOvel.jpg' alt= 'some random book'/>
			</div>
		</div>

		<div className= 'book-review'>
			<div className= 'book-label'>
				<label>Title:
					<br/>
					{ book.title }
				</label>

				<label>Author:
					<br/>
					{ book.author }
				</label>
			</div>

			<div className= 'book-summary'>
				{ book.summary }
			</div>

			<div className= 'book-stars'>
				<i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
			</div>
		</div>
	</li>
);