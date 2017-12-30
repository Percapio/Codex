import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import SessionFormContainer from '../session/session_form_container';
import BooksSearchContainer from '../books_search/books_search_container';
import ModalContainer from '../modal/modal_container';

export default class NavUserForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.book;

		this.handleSearch = this.handleSearch.bind(this);
		this.callbackToParent = this.callbackToParent.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.logout();
	}

	searchModal() {
		this.setState({
			showModal: !this.state.showModal });
	}

	callbackToParent() {
		this.searchModal();
	}

	handleSearch(book) {
		this.book = book;
		this.searchModal();
	}

	// To incorporate into navbar
	// <i className= "fa fa-bell fa-lg" aria-hidden="true"></i>
	// <i className= "fa fa-weixin fa-lg" aria-hidden="true"></i>
	// <i className= "fa fa-envelope-open fa-lg" aria-hidden="true"></i>
	// <i className= "fa fa-user-plus fa-lg" aria-hidden="true"></i>


	render() {
		let options = {
			bookshelves: this.props.bookshelves
		}

		let user = this.props.user;

		if ((this.props.sessionType === '/') || (this.props.sessionType === '/login')) {
			return (
				<div className= 'nav-bar nav-center'>
					<NavLink to= { `/` }>Codex</NavLink>
					<div className= 'user-form-container' />
				</div>
			)
		} else if (!user) {
				return (
					<Route
						exact path= '/'
						render= { SessionFormContainer } />
				)
		} else {
			let name = user.username.toUpperCase();

			return (
				<div className= 'nav-bar'>
					<NavLink to= { `/login` }>Codex</NavLink>

					<div className= 'nav-bar-mid'>
						<h1>WELCOME, { name }!</h1>

						<BooksSearchContainer
							handleSearch= { this.handleSearch } />

						{ this.state.showModal ? <ModalContainer 
																				item= { this.book }
																				open= { true }
																				type= { 'book' }
																				options= { options }
																				user= { user }
																				callbackToParent= { this.callbackToParent } /> : 
																			null }	
					</div>

					<div className= 'user-form-container'>
						<div className= 'nav-links'>
							<i className= "fa fa-user-circle-o fa-2x" aria-hidden="true">
								<ul className= "signout-dropdown">
									<li onClick= { this.handleClick }>Sign Out</li>
								</ul>
							</i>
						</div>
					</div>
				</div>
			)
		}
	}
};