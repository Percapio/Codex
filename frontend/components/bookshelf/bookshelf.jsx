import React from 'react';
import { NavLink } from 'react-router-dom';
import BookshelfItem from './bookshelf_item';

class Bookshelf extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			description: '',
			owner_id: this.props.match.params.user_id
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.getBookshelves(this.state.owner_id);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createBookshelf(this.state, this.state.owner_id)
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	render() {
		const bookshelves = this.props.bookshelves.map(
								(bookshelf, index) => (
									<BookshelfItem
										key= { index }
										bookshelf= { bookshelf }
										owner_id= { this.state.owner_id } />
									)
								)

		return (
			<div className= 'mini-container'>
				<div className= 'mini-shelves'>
					<img src= 'http://www.scholastic.com/parents/sites/default/files/field_asset_image/iStock_000043350128_XXXLarge.jpg' alt= 'some random book'/>
					<ul>
						{ bookshelves }
					</ul>
				</div>

				<form className= 'bookshelf-index' onSubmit= {this.handleSubmit}>
					<input
						type= 'text'
						value= {this.state.title}
						onChange= {this.handleChange('title')}
						placeholder= 'shelf name' />

					<input type= 'submit' value= 'Add' className= 'submit-button'/>
				</form>

				<hr />

				<div className= "current-reading">
					<h3>Current Reading</h3>
					<img 
						src= 'http://cdn.hbowatch.com/wp-content/uploads/2012/01/A-Game-of-Thrones-book-Cover-NOvel.jpg'
						alt= 'some random book'
						className= 'side-bar-books' />
					<div className= 'mini-edits'>
						<i className="fa fa-minus-circle" aria-hidden="true"></i>
						<i className="fa fa-plus-circle" aria-hidden="true"></i>
					</div>
				</div>

				<hr />

				<div className= "want-to-read">
					<h3>Want to Read</h3>
					<img 
						src= 'http://cdn.hbowatch.com/wp-content/uploads/2012/01/A-Game-of-Thrones-book-Cover-NOvel.jpg' 
						alt= 'some random book'
						className= 'side-bar-books' />
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