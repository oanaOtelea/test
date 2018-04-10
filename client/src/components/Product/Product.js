import React, { Component } from 'react';
import Image from '../Image/Image';
import { Col } from 'react-bootstrap';
import './Product.css';

class Product extends Component {
	constructor(props) {
	    super();
		
		this.state = {
			
		}

		this.addProductToCart = this.addProductToCart.bind(this);
	}

	addProductToCart(cartItems) {
		console.log('before ', cartItems);
		cartItems.push(this.props.product);
		console.log('after ', cartItems);
  		this.props.updateCart({ cartItems: cartItems, showPopup: 2 });
	}

	render() {
		let url = require('../../assets/products/product_image.png');
		
		return (
			<Col xs={6} md={3} className="prod-container">
				<div className="prod-thumb">
					<Image width="200" height="220" url={url} key={this.props.product.id} index={this.props.product.id} />
				</div>
				<div className="prod-title">
					<span>{this.props.product.name}</span>
				</div>
				<div className="prod-price">
					<span></span>
				</div>
				<div className="prod-add-to-cart">
					<input className="btn-atc" type="submit" value="Add to cart" onClick={(e) => this.addProductToCart(this.props.cartState.cartItems)} />
				</div>
			</Col>
		);
	}
}

export default Product;