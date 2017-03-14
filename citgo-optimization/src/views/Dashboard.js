// Dashboard @flow
import React, { Component } from 'react'
import '../styles/Dashboard.css'

import Media from '../Media'

export default class Dashboard extends Component {
	render():void {
		return (
			<main id="dashboard">
				<p>Dashboard!</p>
				<Media
					data={{ outLink: "https://source.unsplash.com/random/300x250" }}
					image={{
						src: "https://source.unsplash.com/random/300x250",
						alt: "Random Unsplash Image"
				    }}
					header={{ title: "My Favorite Image", subtitle: "by Geoff Davis" }}
				  >
					<p>This is my favorite image right now.</p>
					<p>Checkout <a href="https://unsplash.com">Unsplash</a>!</p>
					<p>Thanks!</p>
				</Media>
			</main>
		)
	}
}