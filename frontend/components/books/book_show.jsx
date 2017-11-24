import React from 'react';
// import BookShowItem from './book_show';

class BookShow extends React.Component {
	componentDidMount() {
		this.props.getSingleBook()
	}

	render() {
		return (
			<div>
				<div className= "current-reading">
					<img src= 'http://cdn.hbowatch.com/wp-content/uploads/2012/01/A-Game-of-Thrones-book-Cover-NOvel.jpg' alt= 'some random book'/>
					<h3>Current Reading</h3>
				</div>

				<div className= "want-to-read">
					<img src= 'http://cdn.hbowatch.com/wp-content/uploads/2012/01/A-Game-of-Thrones-book-Cover-NOvel.jpg' alt= 'some random book'/>
					<h3>Want to Read</h3>
				</div>
			</div>
		)
	}
}

export default BookShow;