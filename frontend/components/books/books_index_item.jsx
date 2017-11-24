import React from 'react';
import { Link } from 'react-router-dom';

export default ({ book }) => (
	<li className= 'book-title'>
		{ book.title }
	</li>
);