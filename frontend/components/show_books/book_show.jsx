import React from 'react';
import BookShowItem from './book_show_item';
import ReviewContainer from '../reviews/reviews_container';

class BookShow extends React.Component {
	render() {
		const { book } = this.props;
		return(
			<div className='main-component'>
				<h2>{ book.title }</h2>

				<div className= 'book-container'>
					<img src= { book.img_url } alt= 'some book'/>

					<div className= 'book-info'>
						<div className= 'book-title'>
							<p>by { book.author }</p>
						</div>

						<div className= 'book-summary'>
							<p>{ book.summary }</p>
						</div>
					</div>
				</div>

				<div className= 'book-reviews'>
					<ReviewContainer />
				</div>
			</div>
		)
	}
}

export default BookShow;