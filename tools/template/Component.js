// Modules.
import React from 'react';
import * as animate from 'gsap-promise';
import classnames from 'classnames';

// Components.
import BaseComponent from 'src/components/BaseComponent';

// Styles.
import styles from './{{name}}.css';

export default class {{name}} extends BaseComponent {

	constructor(props) {

		super(props);
		
		this.state = {
		};

	}

	animateIn(opt = {}) {
		return Promise.all([
		]);
	}

	animateOut(opt = {}) {
		return Promise.all([
		]);
	}

	render() {

		const classes = classnames({
			[styles.{{name}}]: true,
		});

		return (
			<div className={ classes } ref={ el => this.$node = el }>

			</div>
		);

	}

}
