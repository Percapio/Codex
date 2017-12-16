import React from 'react';
import BookshelfItem from './bookshelf_item';
import BookshelfCreate from './bookshelf_create';

export default 
	({ bookshelves, user, createBookshelf, deleteBookshelf, deleteShelf, createShelf }) => {
	let currentReading, wantToRead, sideShelves, shelvesList, shelfCreate;

	if (bookshelves.length > 0) {
		for (let i=0; i < bookshelves.length; i++) {
			let bookshelf = bookshelves[i];
			
			if ((bookshelf.title === 'Currently Reading') && (bookshelf.owner_id == user.id)) {
				currentReading = <BookshelfItem
														key= { bookshelf.id } 
														item= { bookshelf }
														user= { user } 
														deleteShelf= { deleteShelf }
														sideShelves= { true } />;
			} else if ((bookshelf.title === 'Want to Read') && (bookshelf.owner_id == user.id)) {
				wantToRead = <BookshelfItem
														key= { bookshelf.id } 
														item= { bookshelf }
														user= { user } 
														deleteShelf= { deleteShelf }
														sideShelves= { true } />; 
			} 
		}

		shelvesList = bookshelves.map(
								(bookshelf, index) => {
									
									if (index > 1){
										return (
											<BookshelfItem
												key= { bookshelf.id }
												item= { bookshelf }
												user = { user }
												deleteShelf= { deleteBookshelf }
												sideShelves= { false } />
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
				<hr />

				<ul>
					<p>select one</p>
					{ shelvesList }
				</ul>
					{ shelfCreate }
			</div>

			<hr />
				<div className= "sideShelves">
					<h3>Current Reading</h3>
					{ currentReading }
				</div>
			<hr />
				<div className= 'sideShelves'>
					<h3>Want To Read</h3>
					{ wantToRead }
				</div>
			<hr />
		</div>
	)
}