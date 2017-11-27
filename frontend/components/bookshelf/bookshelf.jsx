import React from 'react';
import { NavLink } from 'react-router-dom';
import BookshelfItem from './bookshelf_item';

class Bookshelf extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			shelfName: '',
			user_id: this.props.match.params.user_id
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.getBookshelves(this.props.match.params.user_id);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.createBookshelf(this.state, this.state.user_id);
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	render() {
		return (
			<div className= 'mini-container'>
				<div>
					<img src= 'http://www.scholastic.com/parents/sites/default/files/field_asset_image/iStock_000043350128_XXXLarge.jpg' alt= 'some random book'/>
					<h3>BOOKSHELF GOES HERE</h3>

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