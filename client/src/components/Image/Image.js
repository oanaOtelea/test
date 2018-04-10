import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
	render() {
		return (
			<img width={this.props.width} height={this.props.height} src={this.props.url} alt={this.props.index} />
		);
	}
}

export default Image;