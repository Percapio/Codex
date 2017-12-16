import React from 'react';
import Modal from 'react-modal';

import Book from '../reviews/book';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
}

class ModalComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: props.open,
			type: props.type,
			item: props.item
		}
	}

	toggleModal() {
		this.setState({ 
			modalIsOpen: !this.state.modalIsOpen,
			type: '',
			item: '' })
	}

	render() {
		let container;

		if (this.state.type === 'book') {
			container = <Book 
										book= { this.state.item } 
										user= { this.props.user } />
		}

		return(
			<div>
				<Modal
					isOpen= { this.state.modalIsOpen }
					onRequest= { this.toggleModal }
					style= { customStyles }
					contentLabel= "Base Modal"
					ariaHideApp= { false } >
					
					{ container }
				</Modal>
			</div>
		)
	}
}

export default ModalComponent;