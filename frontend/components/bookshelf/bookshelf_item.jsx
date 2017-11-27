import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ bookshelf }) => (
	<li>
		<label className="bookshelf-title">{ bookshelf.title }</label>

	</li>
);