import React, { Component } from 'react';

class CartState extends Component {
	constructor(props) {
		super(props);

		this.state = {
			countItemsInCart: 0,
			items: []
		}
	}

	componentWillReceiveProps(nextProps) {
	    if(nextProps.item !== this.props.item) {
console.log(this.state.items);
	    	this.state.items.push(nextProps.item)
	      	this.setState(this.state);
	    }
	}

	pushItems(nextProps) {
		if(nextProps.item !== this.props.item) {
console.log(this.state.items);
	    	this.state.items.push(nextProps.item)
	      	this.setState(this.state);
	    }
	}



	render() {
// console.log('kkkk', this.state);
		return (
			
			<div>
			 {React.Children.map(this.props.children, child => {
		          return React.cloneElement(child);
		        })}
			</div>
		);
	}
}

export default CartState;