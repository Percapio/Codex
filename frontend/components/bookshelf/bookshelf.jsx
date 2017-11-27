import React from 'react';
import { NavLink } from 'react-router-dom';
import BookshelfItem from './bookshelf_item';

class Bookshelf extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			description: '',
			owner_id: this.props.user_id
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.getBookshelves(this.props.user_id);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createBookshelf(this.state, this.state.owner_id);
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	render() {
		const bookshelves = this.props.bookshelves.map(
								bookshelf => (
									<BookshelfItem
										key= { bookshelf.id }
										bookshelf= { bookshelf } />
									)
								)

		return (
			<div className= 'mini-container'>
				<div>
					<img src= 'http://www.scholastic.com/parents/sites/default/files/field_asset_image/iStock_000043350128_XXXLarge.jpg' alt= 'some random book'/>
					<ul>
						{ bookshelves }
					</ul>

					<form className= 'bookshelf-index' onSubmit= {this.handleSubmit}>
						<input
							type= 'text'
							value= {this.state.title}
							onChange= {this.handleChange('title')} />

						<input type= 'submit' value= 'Add Bookshelf'/>
					</form>
				</div>
			</div>
		)
	}
}

export default Bookshelf;