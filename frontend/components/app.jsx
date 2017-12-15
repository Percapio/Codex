import React from 'react';
import { 
	Switch, 
	Route 
} from 'react-router-dom';
import { 
	AuthRoute, 
	ProtectedRoute
} from './../util/routes_util';

import NavUserFormContainer from './api/nav_user_form_container';
import SessionFormContainer from './session/session_form_container';
import DashboardContainer from './dashboard/dashboard_container';

export default ({ errors }) => {
	return(
		<div>
			<NavUserFormContainer />
			<Switch>
				<AuthRoute exact path= '/login' component= { SessionFormContainer } />
				<AuthRoute exact path= '/' component= { SessionFormContainer } />
				<ProtectedRoute path= '/:username' component= { DashboardContainer } />
			</Switch>
		</div>
	)
};