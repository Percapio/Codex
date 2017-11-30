import React from 'react';
import BookShowItem from './book_show_item';

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
					<textarea 
						className= 'book-review'
						defaultValue= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						/>
				</div>
			</div>
		)
	}
}

export default BookShow;