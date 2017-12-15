import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
	AuthRoute, 
	ProtectedRoute
	} from './../util/routes_util';

import Errors from './errors/errors';
import NavUserFormContainer from './api/nav_user_form_container';
import SessionFormContainer from './session/session_form_container';
import DashboardContainer from './dashboard/dashboard_container';



// import LoginFormContainer from './session/login_form_container';
// import BookIndexContainer from './books/books_index_container';
// import BooksIndex from './books/books_index';
// import BookshelfContainer from './bookshelf/bookshelf_container';
// import ShelvesContainer from './shelves/shelves_container';
// import ReviewsContainer from './reviews/reviews_container';
				// <ProtectedRoute path= "/api/books/:id" component= { ReviewsContainer } />
				// <ProtectedRoute path= "/user/:user_id/:bookshelf_title" component= { ShelvesContainer } />
				// <ProtectedRoute path= "/user/:user_id" component= { BooksIndex } />
				// <AuthRoute exact path= '/login' component= { LoginFormContainer } />

export default ({ errors }) => {
	return(
		<div>
			<NavUserFormContainer />
			<div>
				{ errors && <Errors errors= { errors } /> }
			</div>
			<Switch>

				<AuthRoute exact path= '/login' component= { SessionFormContainer } />
				<AuthRoute exact path= '/' component= { SessionFormContainer } />
				<ProtectedRoute path= '/:username' component= { DashboardContainer } />
			</Switch>
		</div>
	)
};