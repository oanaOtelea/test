import React, { Component } from 'react';
import Image from '../Image/Image';
import { Carousel } from 'react-bootstrap';

class Slider extends Component {
	importAll(r) {
  		return r.keys().map(r);
	}

	render() {
		let images = this.importAll(require.context('../../assets/slider', false, /\.(png|jpe?g|svg)$/));

		return (
			<Carousel>
				{images.map(function(image, i){
			        return (
			        	<Carousel.Item key={i}>
			        		<Image url={image} key={i} index={i} />
						    <Carousel.Caption>
						      <h3>First slide label</h3>
						      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						    </Carousel.Caption>
						</Carousel.Item>
			         );
			     })}
			</Carousel>
		);
	}
}

export default Slider;