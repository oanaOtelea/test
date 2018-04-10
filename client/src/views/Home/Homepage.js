import React, { Component } from 'react';
import Slider from '../../components/Slider/Slider';

class Homepage extends Component {
	render() {
		return (	
			<div className="homepage-container">
				
				<div className="slider-container">
					<Slider />
				</div>
			</div>
		);
	}
}

export default Homepage;