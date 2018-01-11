// Modules.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TransitionGroup from 'react-addons-css-transition-group';

// Elements.
import Preloader from './elements/Preloader';

// Sections.
import Home from 'src/sections/Home';
import Test from 'src/sections/Test';

// Styles.
import styles from './App.css';

// Routes.
import { Routes } from './Routes';

export default class App extends Component {

	static get propTypes() {
		return {
			windowResize: PropTypes.func.isRequired,
			children: PropTypes.element,
		};
	}

	static get defaultProps() {
		return {
			windowResize: f => f,
			children: null,
		};
	}

	constructor(props, context) {

		super(props, context);
		
		this.state = {
			isPreloaderLoaded: false,
			isPreloaderHidden: false,
		};

		window.addEventListener('resize',
			debounce(() => props.windowResize(window.innerWidth, window.innerHeight), 200)
		);

		props.windowResize(window.innerWidth, window.innerHeight);
	
	}

	preloaderLoadedHandler() {
		this.setState({
			isPreloaderLoaded: true,
		});
	}

	preloaderHiddenHandler() {
		this.setState({
			isPreloaderHidden: true,
		});
	}

	render() {

		const { isPreloaderHidden, isPreloaderLoaded } = this.state;

		return (
			<div className={styles.App}>
				{
					!isPreloaderHidden &&
					<Preloader
						onLoaded={ () => this.preloaderLoadedHandler() }
						onHidden={ () => this.preloaderHiddenHandler() }
					/>
				}
				{
					isPreloaderLoaded &&
					<div className={ styles.wrapper }>
						<BrowserRouter>
							<Route render={ ({ location }) => (
								<TransitionGroup
									transitionName="__app"
									transitionEnterTimeout={ 1000 }
									transitionLeaveTimeout={ 1000 }
								>
									<Switch location={ location } key={ location.key }>
										{
											Routes.map((route, key) => (
												<Route
													exact={ route.exact }
													path={ route.path }
													component={ route.component }
													key={ key }
												/>
											))
										}
									</Switch>
								</TransitionGroup>
							)} />
						</BrowserRouter>
					</div>
				}
			</div>
		);

	}
	
}
