// Modules.
import React from 'react';
import * as animate from 'gsap-promise';
import classnames from 'classnames';

// Components.
import BaseSection from 'src/components/BaseSection';

// Styles.
import styles from './{{name}}.css';

export default class {{name}} extends BaseSection {

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
			'routeWrapper': true,
			[styles.{{name}}]: true,
		});

		return (
			<section className={ classes } ref={ el => this.$node = el }>

			</section>
		);

	}

}
