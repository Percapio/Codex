import React from 'react';
import { NavLink } from 'react-router-dom';
import BookshelfItem from './bookshelf_item';

class Bookshelf extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			description: '',
			userId: this.props.user.id
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.getBookshelves(this.props.user.id);
		this.props.getAllBooks();
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createBookshelf(this.state, this.state.userId);
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleReadings() {
		if (this.props.currentReading) {
			return (
				<div>
					<div className= "current-reading">
						<h3>Current Reading</h3>
						
						<NavLink to= { `/user/${ this.props.user.id }/Currently Reading/${ this.props.currentReading.id }` } >
							<img 
								src= { this.props.currentReading.img_url }
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

						<NavLink to= { `/user/${ this.props.user.id }/Want to Read/${ this.props.wantToRead.id }` } >
							<img 
								src= { this.props.wantToRead.img_url }
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
			)
		}
	}

	render() {
		const bookshelves = this.props.bookshelves.map(
								(bookshelf, index) => {
									
									if (index > 1){
										return (
											<BookshelfItem
												key= { bookshelf.id }
												bookshelf= { bookshelf }
												userId = { this.props.user.id }
												deleteShelf= { this.props.deleteBookshelf } />
										)
									}
								}
							)

		return (
			<div className= 'mini-container'>
				<div className= 'mini-shelves'>
					<h2>BOOKSHELF</h2>

					<hr />

					<ul>
						<p>select one</p>
						{ bookshelves }
					</ul>
				</div>

				<form className= 'bookshelf-index' onSubmit= { this.handleSubmit }>
					<input
						type= 'text'
						value= { this.state.title }
						onChange= { this.handleChange('title') }
						placeholder= 'shelf name' />

					<input type= 'submit' value= 'Add' className= 'submit-button'/>
				</form>

				<hr />

				{ this.handleReadings() }

				<hr />
			</div>
		)
	}
}

export default Bookshelf;