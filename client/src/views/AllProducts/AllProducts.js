import React, { Component } from 'react';
import Product from '../../components/Product/Product';

class AllProducts extends Component {
	constructor(props) {
		super();
		this.state = {
			events: ['scroll'],
			products: [],
			test: 'abc',
			numberOfProducts: 0,
			scrollBottom: 100
		};
console.log('all products ', props.cartItems);
		// this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		console.log('ggggg');
		fetch('http://localhost:3000/products?_limit=20')
			.then(response => {
		        if (response.ok) {
		          return response.json();
		        } else {
		          throw new Error('Something went wrong ...');
		        }
		    })
        	.then(data => this.setState({ products: data, numberOfProducts: 20 }));
	
//     	window.addEventListener('scroll', this.handleScroll);
	}

// 	componentWillUnmount() {
// 	    window.removeEventListener('scroll', this.handleScroll);
// 	}

// 	handleScroll(event) {
// 		this.state.test = 'tst';
// 		// console.log('jjjj');
// 		// console.log('the scroll things', event);
// 	   var y = window.scrollY;
// 	   console.log(y);
// // console.log('as', itemTranslate);
// 		if (y >= this.state.scrollBottom) {
// 			fetch('http://localhost:3000/products?_start=' + this.state.numberOfProducts)
// 					.then(response => {
// 				        if (response.ok) {
// 				          return response.json();
// 				        } else {
// 				          throw new Error('Something went wrong ...');
// 				        }
// 				    })
// 		        	.then(data => this.setState({ products: data, numberOfProducts: 20 + this.state.numberOfProducts, scrollBottom: y + this.state.scrollBottom }));
// 		        	console.log(this.state);
// 		}
        
// 	}

	
// 	setStateEx() {
// 		console.log('a');
// 		fetch('http://localhost:3000/products?_limit=20')
// 			.then(response => {
// 		        if (response.ok) {
// 		          return response.json();
// 		        } else {
// 		          throw new Error('Something went wrong ...');
// 		        }
// 		    })
//         	.then(data => this.setState({ products: data }));
// 	}

	render() {
		const { products } = this.state;

		return (
			<div className="all-products">
				{products.map(product =>
					<Product key={product.id} product={product} />
				)}
			
			</div>
		);
	}
}

export default AllProducts;