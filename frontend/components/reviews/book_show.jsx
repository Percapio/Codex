import React from 'react';

export default ({ book }) => (
	<div className= 'book-container'>
		<div className= 'show-top'>
			<img src= { book.img_url } alt= 'some book'/>
		</div>

		<div className= 'show-bottom'>
			<div className= 'book-title'>
				<h2>{ book.title }</h2>
				<p>by { book.author }</p>
			</div>

			<div className= 'book-summary'>
				<p>{ book.summary }</p>
			</div>
		</div>
	</div>
);