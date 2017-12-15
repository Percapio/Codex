import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ bookshelf, userId, deleteShelf }) => {
	const deleteBookshelf = () => deleteShelf( bookshelf.id, userId );
	
	return(
		<li>
			<div className= 'mini-shelf'>
				<NavLink 
					to= { `/user/${ userId }/${ bookshelf.title }/${ bookshelf.id }` }
					className= 'bookshelf-title' >
					<p>{ bookshelf.title }</p>
				</NavLink>
				<i 
					className= "fa fa-times" 
				 	aria-hidden= "true"
				 	></i>
			</div>
		</li>
	)
}


	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		title: '',
	// 		description: '',
	// 		userId: this.props.user.id
	// 	}

	// 	this.handleSubmit = this.handleSubmit.bind(this);
	// }

	// handleSubmit(e) {
	// 	e.preventDefault();
	// 	this.props.createBookshelf(this.state, this.state.userId);
	// }

	// handleChange(field) {
	// 	return(e) => this.setState({
	// 		[field]: e.currentTarget.value
	// 	});
	// }