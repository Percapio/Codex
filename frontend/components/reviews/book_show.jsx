import React from 'react';

export default ({ book }) => (
	<div>
		<h2>{ book.title }</h2>
		<div className= 'book-container'>
			<div className= 'show-top'>
				<div className= 'img-container'>
					<img src= { book.img_url } alt= 'some book'/>
				</div>

				<div className= 'book-info'>
					<div className= 'book-title'>
						<p>by { book.author }</p>
					</div>
				</div>

				<div className= 'show-bottom'>
					<div className= 'book-summary'>
						<p>{ book.summary }</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);