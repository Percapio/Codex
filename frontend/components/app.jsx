import React from 'react';
import SessionFormContainer from './session/session_form_container';
import NavBar from './api/navbar';

export default () => (
	<div>
		<header>
			<NavBar />
		</header>

		<SessionFormContainer />
	</div>
);