import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import './CartBadge.css';

class CartBadge extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.countItemsInCart != 0) {
			return <Badge id="cart-badge">{this.props.countItemsInCart}</Badge>
		}
	}
}

export default CartBadge;