import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import CartIcon from '../Cart/CartIcon';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<Navbar inverse fixedTop>
			<Navbar.Header>
			    <Navbar.Brand>
			      <NavLink to="/">Shopping Website</NavLink>
			    </Navbar.Brand>
			</Navbar.Header>
			<ul className="nav navbar-nav">
				<li>
			     <NavLink to="/about-us">About us</NavLink>
			    </li>
			    <li>
			     <NavLink to="/contact-us">Contact us</NavLink>
			    </li>
			    <li>
			     <NavLink to="/products">All Products</NavLink>
			    </li>
			    <NavDropdown title="Categories" id="basic-nav-dropdown">
			      <MenuItem>Action</MenuItem>
			      <MenuItem>Another action</MenuItem>
			      <MenuItem>Something else here</MenuItem>
			      <MenuItem divider />
			      <MenuItem>All Categories</MenuItem>
			    </NavDropdown>
			</ul>
	  		<ul className="nav navbar-nav navbar-right">
	  			<li className="cart-icon">
		        	<NavLink to="/cart"><CartIcon /></NavLink>
		        </li>
	        </ul>
	        </Navbar>
		);
	}
}

export default Header;