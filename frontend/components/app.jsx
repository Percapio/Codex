import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute } from './../util/routes_util';
import NavBar from './api/navbar';
import SessionFormContainer from './session/session_form_container';
import BookIndexContainer from './books/books_index_container';

export default () => (
	<div>
		<header>
			<NavBar />
		</header>

		<Switch>
			<Route path= '/users/show' component= { BookIndexContainer } />
			<Route path= '/books/index' component= { BookIndexContainer } />
			<AuthRoute exact path='/' component= { SessionFormContainer } />
		</Switch>
	</div>
);