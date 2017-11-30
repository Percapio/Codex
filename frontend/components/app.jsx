import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
	AuthRoute, 
	ProtectedRoute
	} from './../util/routes_util';

import Errors from './errors/errors';
import NavUserFormContainer from './api/nav_user_form_container';
import SessionFormContainer from './session/session_form_container';
import LoginFormContainer from './session/login_form_container';
import BookIndexContainer from './books/books_index_container';
import BookshelfContainer from './bookshelf/bookshelf_container';
import ShelvesContainer from './shelves/shelves_container';
import BookShowContainer from './show_books/book_show_container';

export default ({ errors }) => {
	return(
		<div>
			<NavUserFormContainer />
			<div>
				{ errors && <Errors errors= { errors } /> }
			</div>
			<Switch>
				<ProtectedRoute path= "/api/books/:id" component= { BookShowContainer } />
				<ProtectedRoute path= "/user/:user_id/:bookshelf_title" component= { ShelvesContainer } />
				<ProtectedRoute path= "/user/:user_id" component= { BookIndexContainer } />
				<AuthRoute exact path='/login' component= { LoginFormContainer } />
				<AuthRoute exact path='/' component= { SessionFormContainer } />
			</Switch>
		</div>
	)
};