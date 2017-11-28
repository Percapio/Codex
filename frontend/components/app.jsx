import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './../util/routes_util';
import NavBar from './api/navbar';
import SessionFormContainer from './session/session_form_container';
import BookIndexContainer from './books/books_index_container';
import BookshelfContainer from './bookshelf/bookshelf_container';
import ShelvesContainer from './shelves/shelves_container';
import BookShowContainer from './show_books/book_show_container';

export default () => (
	<div>
		<NavBar />

		<Switch>
			<ProtectedRoute path= "/api/books/:id" component= { BookShowContainer } />
			<ProtectedRoute path= "/user/:user_id/:bookshelf_title" component= { ShelvesContainer } />
			<ProtectedRoute path= "/user/:user_id" component= { BookIndexContainer } />
			<AuthRoute exact path='/signup' component= { SessionFormContainer } />
			<AuthRoute exact path='/login' component= { SessionFormContainer } />
		</Switch>
	</div>
);