import React from 'react';
import { Link } from 'react-router-dom';

export default ({ books }) => (
	<li className= 'book-item'>
		<li className= 'book-image'>
			<img src= { book.img_url } />
		</li>
		<li className= 'book-title'>
			{ book.title }
		</li>
		<li className= 'book-author'>
			{ book.author }
		</li>
	</li>
);