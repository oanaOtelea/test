import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from '../views/Home/Homepage';
import About from '../views/About/About';
import Contact from '../views/Contact/Contact';
import AllProducts from '../views/AllProducts/AllProducts';
import Cart from '../views/Cart/Cart';
import './Main.css';

class Main extends Component {
	render() {
		return (
			<div id="main-content" className="container">
			    <Switch>
			    	<Route exact path="/" component={Homepage} />
                    <Route path="/about-us" component={About} />
                    <Route path="/contact-us" component={Contact} />
                    <Route path="/products" component={AllProducts} />
                    <Route path="/cart" component={Cart} />
			    </Switch>
			</div>
		);
	}
}

export default Main;