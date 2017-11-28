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
					<div>
						<img src= 'http://www.scholastic.com/parents/sites/default/files/field_asset_image/iStock_000043350128_XXXLarge.jpg' alt= 'some random book'/>
						<ul>
							{ bookshelves }
						</ul>
					</div>

					<form className= 'bookshelf-index' onSubmit= {this.handleSubmit}>
						<input
							type= 'text'
							name= 'Name bookshelf'
							value= {this.state.title}
							onChange= {this.handleChange('title')} />

						<input type= 'submit' value= 'Add shelf' className= 'submit-button'/>
					</form>

					<hr />

					<div className= "current-reading">
						<img src= 'http://cdn.hbowatch.com/wp-content/uploads/2012/01/A-Game-of-Thrones-book-Cover-NOvel.jpg' alt= 'some random book'/>
						<h3>Current Reading</h3>
					</div>

					<hr />

					<div className= "want-to-read">
						<img src= 'http://cdn.hbowatch.com/wp-content/uploads/2012/01/A-Game-of-Thrones-book-Cover-NOvel.jpg' alt= 'some random book'/>
						<h3>Want to Read</h3>
					</div>
			</div>
		)
	}
}

export default Bookshelf;