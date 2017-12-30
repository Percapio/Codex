import React from 'react';
import BookshelfContainer from './bookshelf_container';
import BookshelfCreate from './bookshelf_create';

export default ({ bookshelves, user, createBookshelf }) => {
	let wantToRead, sideShelf, shelfCreate;
	let shelvesList = [];

	if ((bookshelves.length > 0) && (typeof bookshelves != 'undefined')) {
		for (let i=0; i < bookshelves.length; i++) {
			let bookshelf = bookshelves[i];

			if (bookshelf.title === 'Want to Read') {
				wantToRead = <BookshelfContainer
														key= { bookshelf.id } 
														user= { user } 
														bookshelf= { bookshelf }
														bookshelves= { bookshelves }
														sideShelf= { true } />; 
			} else {
				shelvesList.push(<BookshelfContainer
														key= { bookshelf.id }
														user= { user }
														bookshelf= { bookshelf }
														bookshelves= { bookshelves }
														sideShelf= { false } />)
			}
		}

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

			{ wantToRead }
		</div>
	)
}