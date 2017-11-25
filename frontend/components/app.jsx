import React from 'react';
import { Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './../util/routes_util';
import NavBar from './api/navbar';
import SessionFormContainer from './session/session_form_container';
import BookIndexContainer from './books/books_index_container';
import BookshelfContainer from './bookshelf/bookshelf_container';

export default () => (
	<div>
		<header>
			<NavBar />
		</header>

		<Switch>
			<ProtectedRoute path= '/bookshelves/show' component= { BookshelfContainer } />
			<ProtectedRoute path= '/users/show' component= { BookIndexContainer } />
			<AuthRoute exact path='/' component= { SessionFormContainer } />
		</Switch>
	</div>
);