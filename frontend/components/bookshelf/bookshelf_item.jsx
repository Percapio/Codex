import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ bookshelf, owner_id }) => (
	<li>
		<NavLink 
			to= { `/user/${owner_id}/${bookshelf.title}` }
			className= 'bookshelf-title'>{ bookshelf.title }
		</NavLink>
	</li>
);