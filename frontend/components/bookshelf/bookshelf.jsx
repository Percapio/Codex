import React from 'react';
import BookshelfContainer from './bookshelf_container';
import BookshelfCreate from './bookshelf_create';

export default ({ bookshelves, user, createBookshelf }) => {
	let currentReading, wantToRead, sideShelves, shelfCreate;
	let shelvesList = [];

	if (bookshelves.length > 0) {
		for (let i=0; i < bookshelves.length; i++) {
			let bookshelf = bookshelves[i];
			
			if ((bookshelf.title === 'Currently Reading') && (bookshelf.owner_id == user.id)) {
				currentReading = <BookshelfContainer
														key= { bookshelf.id } 
														bookshelf= { bookshelf }
														bookshelves= { bookshelves }
														user= { user }
														sideShelves= { true } />;
			} else if ((bookshelf.title === 'Want to Read') && (bookshelf.owner_id == user.id)) {
				wantToRead = <BookshelfContainer
														key= { bookshelf.id } 
														bookshelf= { bookshelf }
														bookshelves= { bookshelves }
														user= { user } 
														sideShelves= { true } />; 
			} else {
				shelvesList.push(<BookshelfContainer
														user= { user }
														key= { bookshelf.id }
														bookshelf= { bookshelf }
														bookshelves= { bookshelves }
														sideShelves= { false } />)
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