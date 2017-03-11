// AppWrapper @flow
import React, { Component } from 'react'
import '../styles/AppWrapper.css'

import { Link } from 'react-router'

const routes = [
	{
		href: '/',
		name: 'Dashboard'
	}
]

const printRoutes = (routesArray) => routesArray.map( (route,i) => {
	return <Link to={route.href} key={i}>{route.name}</Link>
})

export default class AppWrapper extends Component {
	render():void {
		return (
			<div className="app-wrapper">
				<header children={(() => printRoutes(routes))()}/>
				<section className="view-content">
					{this.props.children}
				</section>
			</div>
		)
	}
}