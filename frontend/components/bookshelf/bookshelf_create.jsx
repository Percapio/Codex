import React from 'react';

export default class Bookshelf extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: '',
			userId: this.props.user.id
		}

		this.handleCreate = this.handleCreate.bind(this);
	}
	
	handleCreate(e) {
		e.preventDefault();
		this.props.createBookshelf(this.state, this.state.userId);
	}

	handleChange(field) {
		return(e) => this.setState({
			[field]: e.currentTarget.value
		});
	}

	render() {
		return (
			<form className= 'bookshelf-index' onSubmit= { this.handleCreate }>
				<input
					type= 'text'
					value= { this.state.title }
					onChange= { this.handleChange('title') }
					placeholder= 'shelf name' />

				<input type= 'submit' value= 'Add' className= 'submit-button'/>
			</form>
		)
	}
}