import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ bookshelf, owner_id }) => (
	<li>
		<div className= 'shelf-info'>
			<NavLink 
				to= { `/user/${owner_id}/${bookshelf.title}` }
				className= 'bookshelf-title'>{ bookshelf.title }
			</NavLink>
			<i class= "fa fa-times" 
				 aria-hidden= "true"
				 className= "delete-shelf"></i>
		</div>
	</li>
);