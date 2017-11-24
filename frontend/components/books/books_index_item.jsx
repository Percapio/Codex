import React from 'react';
import { Link } from 'react-router-dom';

export default ({ book }) => (
	<li className= 'book-info'>
		<div className= 'book-splash'>
			<div className= 'book-title'>
				<img src= '~/app/assets/images/book_one.jpg' alt= 'some random book'/>
				<label>Title:   
					{ book.title }
				</label>

				<label>Author:   
					{ book.author }
				</label>
			</div>
		</div>

		<div className= 'book-review'>
			<div className= 'book-summary'>
				{ book.summary }
			</div>
			<div className= 'book-stars'>
				<i className="fa fa-star-o fa-lg" aria-hidden="true"></i>
			</div>
		</div>
	</li>
);