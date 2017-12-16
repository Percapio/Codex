import React from 'react';
import Modal from 'react-modal';

import BookContainer from '../reviews/book_container';

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
			modalIsOpen = false;
		}
	}

	openModal() {
		this.setState({ modalIsOpen = true });
	}

	closeModal() {
		this.setState({ modalIsOpen = false });
	}

	render() {
		return(
			<div>
				<div onClick= { this.openModal } />

				<Modal
					isOpen= { this.state.modalIsOpen }
					onRequest= { this.closeModal }
					style= { customStyles }
					contentLabel= "Base Modal" >
					<BookContainer />
				</Modal>
			</div>
		)
	}
}

export default ModalComponent;