import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ bookshelf }) => (
	<li>
		<h3>{ bookshelf.title }</h3>

	</li>
);