import React from 'react';
import CartStore from '../stores/cartStore';

class ItemsList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: cartStore.getAllItems()
		};

		this._onChange = this._onChange.bind(this);
	}

	_onChange() {
		this.setState({ items: CartStore.getAllItems() });
	}

	componentWillMount() {
		CartStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		CartStore.removeChangeListener(this._onChange);
	}

	render() {

		let noItemsMessage;

		// Show a friendly message instead if there are no items.
		if (!this.state.items.length) {
			noItemsMessage = (<li className="no-items">Your wallet is new!</li>);
		}

		return (
			<ul className="items-list">
				{noItemsMessage}
				{this.state.items.map((itemDetails) => {
					let amountType = parseFloat(itemDetails.amount) > 0 ? 'positive' : 'negative';
					return (<li key={itemDetails.id}>{itemDetails.description} <span className={amountType}>{itemDetails.amount}</span></li>);
				})}
			</ul>
		);
	}
}

export default ItemsList;