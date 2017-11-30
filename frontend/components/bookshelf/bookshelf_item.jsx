import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ bookshelf, props, deleteShelf }) => {
	const deleteBookshelf = () => deleteShelf( bookshelf.id, props.userId );
	debugger;

	return(
		<li>
			<div className= 'mini-shelf'>
				<NavLink 
					to= { `/user/${ props.userId }/${ bookshelf.title }` }
					className= 'bookshelf-title'>
					<p>{ bookshelf.title }</p>
				</NavLink>
				<i 
					className= "fa fa-times" 
				 	aria-hidden= "true"
				 	></i>
			</div>
		</li>
	)
}
