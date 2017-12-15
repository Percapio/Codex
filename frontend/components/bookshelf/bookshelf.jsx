import React from 'react';
import { NavLink } from 'react-router-dom';
import BookshelfItem from './bookshelf_item';
import BookshelfCreate from './bookshelf_create';

export default 
	({ bookshelves, user, createBookshelf, deleteBookshelf, deleteShelf, createShelf }) => {
	let currentReading, wantToRead, sideShelves, shelvesList, shelfCreate;

	if (bookshelves.length > 0) {
		for (let i=0; i < bookshelves.length; i++) {
			let bookshelf = bookshelves[i];
			
			if ((bookshelf.title === 'Currently Reading') && (bookshelf.owner_id == user.id)) {
				currentReading = bookshelf;
			} else if ((bookshelf.title === 'Want to Read') && (bookshelf.owner_id == user.id)) {
				wantToRead = bookshelf; 
			} 
		}

		sideShelves =
			<div>
				<div className= "current-reading">
					<h3>Current Reading</h3>
					
					<NavLink to= { `/${ user.username }/Currently Reading/` } >
						<img 
							src= { currentReading.img_url }
							alt= 'some random book'
							className= 'side-bar-books' />
					</NavLink>
							
					<div className= 'mini-edits'>
						<i className="fa fa-minus-circle" aria-hidden="true"></i>
						<i className="fa fa-plus-circle" aria-hidden="true"></i>
					</div>
				</div>

				<hr />

				<div className= "want-to-read">
					<h3>Want to Read</h3>

					<NavLink to= { `/${ user.username }/Want to Read` } >
						<img 
							src= { wantToRead.img_url }
							alt= 'some random book'
							className= 'side-bar-books'
							 />
					</NavLink>

					<div className= 'mini-edits'>
						<i className="fa fa-minus-circle" aria-hidden="true"></i>
						<i className="fa fa-plus-circle" aria-hidden="true"></i>
					</div>
				</div>
			</div>

		shelvesList = bookshelves.map(
								(bookshelf, index) => {
									
									if (index > 1){
										return (
											<BookshelfItem
												key= { bookshelf.id }
												bookshelf= { bookshelf }
												userId = { user.id }
												deleteShelf= { deleteBookshelf } />
										)
									}
								}
							)

		shelfCreate = <BookshelfCreate
									createBookshelf= { createBookshelf }
									user= { user } />
	}

	return (
		<div className= 'mini-container'>
			<div className= 'mini-shelves'>
				<h2>BOOKSHELF</h2>
					{ shelfCreate }
				<hr />

				<ul>
					<p>select one</p>
					{ shelvesList }
				</ul>
			</div>

			<hr />
				{ sideShelves }
			<hr />
		</div>
	)
}