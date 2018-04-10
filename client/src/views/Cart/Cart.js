import React, { Component } from 'react';
import { Button, Glyphicon, Badge } from 'react-bootstrap';
import './Cart.css';

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countItemsInCart: 0
		}

	}
	render() {
		return (
			
			<div>
			Cart page
			</div>
		);
	}
}

export default Cart;