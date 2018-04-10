import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './CartPopup.css';

class CartPopup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMe: this.props.cartState
		}
	}

	render() {
		// console.log(this.state.showMe);
		// if (!this.state.showMe) {
		// 	console.log('ab');
		// 	return null;
		// }
// console.log('d ', this.props.cartState.cartItems);
		return (
			
			<div className="static-modal">
			<div className="teest">{this.props.cartState.showPopup}</div>
			  {/*<Modal.Dialog>
			    <Modal.Header>
			      <Modal.Title>Modal title</Modal.Title>
			    </Modal.Header>

			    <Modal.Body>One fine body...</Modal.Body>

			    <Modal.Footer>
			      <Button>Close</Button>
			      <Button bsStyle="primary">Save changes</Button>
			    </Modal.Footer>
			  </Modal.Dialog>*/}
			</div>
        );
	}
}

export default CartPopup;