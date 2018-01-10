// Modules.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import preloader from 'preloader';
import * as animate from 'gsap-promise';

// Components.
import BaseComponent from 'src/components/BaseComponent';

// Styles.
import styles from './Preloader.css';

export default class Preloader extends BaseComponent {

	static get propTypes() {
		return {
			onLoaded: PropTypes.func,
			onHidden: PropTypes.func,
		};
	}

	 static get defaultProps() {
		return {
			stageHeight: 0,
			onLoaded: f => f,
			onHidden: f => f,
		};
	}

	constructor(props, context) {

		super(props, context);
		
		this.state = {
			progress: 0,
		};

	}

	componentDidMount() {
		this.animateIn({
			delay: 1,
			ease: Power3.easeOut,
		}).then(() => this.load());
	}

	animateIn(opt = {}) {
		return Promise.all([
			animate.fromTo(this.$node, 1, {
				y: '100%',
			}, {
				y: '0%',
				...opt,
			}),
		]);
	}

	animateOut(opt = {}) {
		return Promise.all([
		animate.to(this.$node, 1, {
			y: '-100%',
			...opt,
		}),
		]);
	}

	componentWillUnmount() {
		this.loader = null;
	}

	loaderProgressHandler(progress) {
		const nextProgress = Math.max(progress, this.state.progress);
		this.setState({ progress: nextProgress });
	}

	loaderCompleteHandler() {
		this.setState({ progress: 1 });
		this.props.onLoaded();
		this.animateOut().then(this.props.onHidden);
	}

	load() {

		this.loader = preloader({ xhrImages: false });

		this.loader.on('progress', progress => this.loaderProgressHandler(progress));
		this.loader.on('complete', () => this.loaderCompleteHandler());

		this.loader.addImage('assets/images/c3p0.png');

		this.loader.load();
	
	}

	render() {
		return (
			<div className={ styles.Preloader } ref={ el => this.$node = el }>
				<p>Loading...</p>
			</div>
		);
	}

}
