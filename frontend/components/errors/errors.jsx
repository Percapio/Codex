import React from 'react';

export default ({ errors }) => {
	const errorsArray = errors.map(
			error => <li>error </li>
		)

	return(
		<ul>errorsArray
			{ this.errorsArray }
		</ul>
	)
};
