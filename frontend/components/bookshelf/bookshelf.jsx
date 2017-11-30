import React from 'react';
import { NavLink } from 'react-router-dom';
import BookshelfItem from './bookshelf_item';

class Bookshelf extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			description: '',
			userId: this.props.match.params.user_id
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.getBookshelves(this.state.userId);
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

	render() {
		const bookshelves = this.props.bookshelves.map(
								(bookshelf, index) => {
									if (index > 1){
										return (
											<BookshelfItem
												key= { bookshelf.id }
												bookshelf= { bookshelf }
												props= { this.state }
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

				<div className= "current-reading">
					<h3>Current Reading</h3>
					
					<NavLink to= { `/user/${ this.state.userId }/Currently Reading` } >
						<img 
							src= 'http://andrewcmaxwell.com/wp-content/themes/acm_2014/images/book_not_found.png'
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

					<NavLink to= { `/user/${ this.state.userId }/Want to Read` } >
						<img 
							src= 'http://andrewcmaxwell.com/wp-content/themes/acm_2014/images/book_not_found.png' 
							alt= 'some random book'
							className= 'side-bar-books'
							 />
					</NavLink>

					<div className= 'mini-edits'>
						<i className="fa fa-minus-circle" aria-hidden="true"></i>
						<i className="fa fa-plus-circle" aria-hidden="true"></i>
					</div>
				</div>

				<hr />
			</div>
		)
	}
}

export default Bookshelf;