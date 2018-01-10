// Modules.
import React from 'react';
import { Link } from 'react-router-dom';
import * as animate from 'gsap-promise';
import classnames from 'classnames';

// Components.
import BaseComponent from 'src/components/BaseComponent';

// Styles.
import styles from './Home.css';

export default class Home extends BaseComponent {

	constructor(props) {
		super(props);
	}

	animateIn(opt = {}) {
		return Promise.all([
			animate.fromTo(this.$node, 1, {
				y: '100%',
			}, {
				y: '0%',
				ease: Power3.easeOut,
				...opt,
			}),
		]);
	}

	animateOut(opt = {}) {
		return Promise.all([
			animate.to(this.$node, 1, {
				y: '-100%',
				ease: Power3.easeOut,
				...opt,
			}),
		]);
	}

	render() {

		const classes = classnames({
			'routeWrapper': true,
			[styles.Home]: true,
		});

		return (
			<section className={ classes } ref={ el => this.$node = el }>
				<img src="assets/images/c3p0.png" ref={ el => this.$img = el } />
				<Link to="/test">Change Page</Link>
			</section>
		);

	}
	
}
