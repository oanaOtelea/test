import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class CartActions {

	addItem(item) {
		// Note: This is usually a good place to do API calls.
		Dispatcher.dispatch({
			actionType: ActionTypes.ADD_ITEM,
			payload: item 
		});
	}

	removeItem(item) {
		// Note: This is usually a good place to do API calls.
		Dispatcher.dispatch({
			actionType: ActionTypes.REMOVE_ITEM,
			payload: item 
		});
	}

}

export default new CartActions();