// App
import React, { Component } from 'react'
import './styles/App.css'

import {
	Router,
	browserHistory,
	Route
} from 'react-router'

import Home from './views/Home'

export default class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route exact path='/' component={Home}/>
			</Router>
		)
	}
}