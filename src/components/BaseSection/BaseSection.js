// Modules.
import React, { Component } from 'react';

export default class BaseSection extends Component {

	componentDidMount() {
		this.animateIn();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.history.location.pathname !== this.props.location.pathname) this.animateOut();
	}

}
