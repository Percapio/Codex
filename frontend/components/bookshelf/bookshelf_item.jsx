import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ bookshelf, userId, deleteShelf }) => (
	<li>
		<div className= 'mini-shelf'>
			a
			<NavLink 
				to= { `/user/${userId}/${bookshelf.title}` }
				className= 'bookshelf-title'>
				<p>{ bookshelf.title }</p>
			</NavLink>
			<i 
				className= "fa fa-times" 
			 	aria-hidden= "true"
			 	className= "delete-shelf"
				></i>
		</div>
	</li>
);
