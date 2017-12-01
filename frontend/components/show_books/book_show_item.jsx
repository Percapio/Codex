import React from 'react';
import BookShowItem from './book_show_item';
import ReviewContainer from '../reviews/reviews_container';
import BookshelfContainer from '../bookshelf/bookshelf_container';

export default = ({ userId, book }) => (
	return (
		<div className= 'main-component'>
			<div className= 'index'>
				<div className= 'index-2'>
					<h2>{ book.title }</h2>

						<div className= 'book-container'>
						<div className= 'show-top'>
							<div className= 'img-container'>
								<img src= { book.img_url } alt= 'some book'/>
							</div>

							<div className= 'book-info'>
								<div className= 'book-title'>
									<p>by { book.author }</p>
								</div>
							</div>

							<div className= 'show-bottom'>
								<div className= 'book-summary'>
									<p>{ book.summary }</p>
								</div>
							</div>
						</div>
					</div>

					<div className= 'book-reviews'>
						<ReviewContainer />
					</div>
				</div>
				<div className= 'index-1'>
					<BookshelfContainer />
				</div>
			</div>
		</div>
	)
);
