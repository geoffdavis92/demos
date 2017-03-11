// App @flow
import React, { Component } from 'react'
import './styles/App.css'

import {
	Router,
	browserHistory,
	IndexRoute,
	Route
} from 'react-router'

import AppWrapper from './views/AppWrapper'
import Dashboard from './views/Dashboard'

export default class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={AppWrapper}>
					<IndexRoute component={Dashboard}/>
				</Route>
			</Router>
		)
	}
}