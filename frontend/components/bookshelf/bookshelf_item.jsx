import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ bookshelf, owner_id }) => (
	<li>
		<div className= 'mini-shelf'>
			<NavLink 
				to= { `/user/${owner_id}/${bookshelf.title}` }
				className= 'bookshelf-title'>
				<p>{ bookshelf.title }</p>
			</NavLink>
			<i className= "fa fa-times" 
				 aria-hidden= "true"
				 className= "delete-shelf"></i>
		</div>
	</li>
);