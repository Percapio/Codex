import React from 'react';
import Modal from 'react-modal';

const modalStyling = {
  content : {
    top: '56%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '500px',
  },
  overlay : {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  }
};

class SearchItem extends React.Component {
	constructor(props) {
    super(props);

		this.state = {
			bookModalIsOpen: false
		};

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ bookModalIsOpen: true });
	}

  closeModal() {
    this.setState({ bookModalIsOpen: false });
  }

  render() {
  	let modal;
  	if(this.props.book) {
  		modal = this.openModal();
  	}

    return(
    	<div>
    		{ modal }
			  <Modal
			    isOpen= { this.state.bookModalIsOpen }
			    onRequestClose= { this.closeModal }
			    style= { modalStyling }
			    contentLabel= 'Book Searches Modal' >
			  </Modal>
	    </div>
    )
  }
}

export default SearchItem;

import React from 'react';
import SearchItem from './search_item';

export default ({ searchResults, searchParams, clearState }) => {
	if (searchParams === '') return null;
	let results;

	if (searchResults.length > 0) {
		results = searchResults.map( book => 
			<SearchItem
				key= { book.ISBN }
				book= { book } />
		)
	}

	return (
		<ul className= 'SearchIndex'>
			{ results }
		</ul>
	)
};