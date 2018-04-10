import React, { Component } from 'react';
import Main from './Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CartPopup from './Cart/CartPopup';

class App extends Component {
	
	render() {
	    return (
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		);
  }
}

export default App;