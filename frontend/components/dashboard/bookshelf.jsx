import React from 'react';
import { NavLink } from 'react-router-dom';
import BookshelfItem from './bookshelf_item';

export default ({ bookshelves, userId }) => {


	// handleReadings() {
	// 	if (this.props.currentReading) {
	// 		return (
				
	// 		)
	// 	}
	// }

	// render() {
		// const bookshelves = this.props.bookshelves.map(
		// 						(bookshelf, index) => {
									
		// 							if (index > 1){
		// 								return (
		// 									<BookshelfItem
		// 										key= { bookshelf.id }
		// 										bookshelf= { bookshelf }
		// 										userId = { this.props.user.id }
		// 										deleteShelf= { this.props.deleteBookshelf } />
		// 								)
		// 							}
		// 						}
		// 					)
						// { bookshelves }

		return (
			<div>
				<h3>BOOKSHELF</h3>
			</div>
		)
		// return (
		// 	<div className= 'mini-container'>
		// 		<div className= 'mini-shelves'>
		// 			<h2>BOOKSHELF</h2>

		// 			<hr />

		// 			<ul>
		// 				<p>select one</p>
		// 			</ul>
		// 		</div>

		// 		<form className= 'bookshelf-index' onSubmit= { this.handleSubmit }>
		// 			<input
		// 				type= 'text'
		// 				value= { this.state.title }
		// 				onChange= { this.handleChange('title') }
		// 				placeholder= 'shelf name' />

		// 			<input type= 'submit' value= 'Add' className= 'submit-button'/>
		// 		</form>

		// 		<hr />

		// 		<div>
		// 			<div className= "current-reading">
		// 				<h3>Current Reading</h3>
						
		// 				<NavLink to= { `/user/${ userId }/Currently Reading/${ this.props.currentReading.id }` } >
		// 					<img 
		// 						src= { this.props.currentReading.img_url }
		// 						alt= 'some random book'
		// 						className= 'side-bar-books' />
		// 				</NavLink>
								
		// 				<div className= 'mini-edits'>
		// 					<i className="fa fa-minus-circle" aria-hidden="true"></i>
		// 					<i className="fa fa-plus-circle" aria-hidden="true"></i>
		// 				</div>
		// 			</div>

		// 			<hr />

		// 			<div className= "want-to-read">
		// 				<h3>Want to Read</h3>

		// 				<NavLink to= { `/user/${ userId }/Want to Read/${ this.props.wantToRead.id }` } >
		// 					<img 
		// 						src= { this.props.wantToRead.img_url }
		// 						alt= 'some random book'
		// 						className= 'side-bar-books'
		// 						 />
		// 				</NavLink>

		// 				<div className= 'mini-edits'>
		// 					<i className="fa fa-minus-circle" aria-hidden="true"></i>
		// 					<i className="fa fa-plus-circle" aria-hidden="true"></i>
		// 				</div>
		// 			</div>
		// 		</div>

		// 		<hr />
		// 	</div>
		// )
	// }
}

// export default Bookshelf;