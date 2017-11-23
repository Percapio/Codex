import React from 'react';
import { Route, Switch } from 'react-redux';

import NavBar from './api/navbar';
import SessionFormContainer from './session/session_form_container';
import BookIndexContainer from './books/books_index_container';

export default () => (
	<div>
		<header>
			<NavBar />
		</header>

		<Switch>
			<Route path= '/user' component= { BookIndexContainer } />
			<Route exact path='/' component= { SessionFormContainer } />
		</Switch>
	</div>
);