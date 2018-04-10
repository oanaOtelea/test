import React, { Component } from 'react';
import { Button, Glyphicon, Badge } from 'react-bootstrap';
import './CartIcon.css';
import CartBadge from './CartBadge';

class CartIcon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countItemsInCart: 0
		}

	}
	render() {
		return (
			<Button id="cart-btn">
		    	<Glyphicon glyph="shopping-cart" id="cart-icon" /><CartBadge count={this.state.countItemsInCart} />
		    </Button>
		);
	}
}

export default CartIcon;