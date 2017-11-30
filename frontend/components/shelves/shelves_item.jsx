import React from 'react';

export default ({ shelf }) => {
	return(
	<li>
		<div className= 'shelf-img'>
			<img src= { shelf.img_url } />
		</div>

		<div className= 'shelf-title'>
			<h4>Title: </h4>
			{ shelf.title }
		</div>
	</li>
)};