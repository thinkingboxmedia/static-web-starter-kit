// Modules.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { BrowserRouter, Route, Switch, matchPath } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

// Elements.
import Preloader from './elements/Preloader';

// Styles.
import styles from './App.css';

// Routes.
import { Routes } from './Routes';

export default class App extends Component {

	static get propTypes() {
		return {
			windowResize: PropTypes.func.isRequired, // browser action
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
			matchedRoutes: [],
		};

		window.addEventListener('resize',
			debounce(() => props.windowResize(window.innerWidth, window.innerHeight), 200)
		);

		props.windowResize(window.innerWidth, window.innerHeight);
	
	}

	componentWillMount() {
		this.props.location && this.matchRoutes(this.props.location);
	}

	componentWillReceiveProps(nextProps) {
		nextProps.location && this.matchRoutes(nextProps.location);
	}

	matchRoutes = ({ pathname }) => {
	
		const matchedRoutes = [];

		for (let i = 0; i < Routes.length; i++) {

			const { component: RouteComponent, ...rest } = Routes[i];
			const match = matchPath(pathname, { ...rest });

			if (match) {

				matchedRoutes.push(
					<RouteComponent key={ RouteComponent } { ...match } />,
				);

				if (match.isExact || match.isStrict)
					break;

			}

		}

		this.setState({ matchedRoutes });

	};

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
						<TransitionGroup>
							{ this.state.matchedRoutes }
						</TransitionGroup>
					</div>
				}
			</div>
		);

	}
	
}
