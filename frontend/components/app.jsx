import React from 'react';
import SessionFormContainer from './session/session_form_container';
import NavUserFormContainer from './api/nav_user_form_container';

export default () => (
	<div>
		<header>
			<h1>Codex</h1>		
			<NavUserFormContainer />
		</header>

		<SessionFormContainer />
	</div>
);