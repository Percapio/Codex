import React from 'react';
import SessionFormContainer from './session/session_form_container';
import NavSessionFormContainer from './session/nav_session_form_container';

export default () => (
	<div>
		<h1>Codex</h1>
		<NavSessionFormContainer />
		<SessionFormContainer />
	</div>
);