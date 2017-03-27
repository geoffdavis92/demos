import React, { Component } from 'react'

export default function withFormSpree (ComponentToWrap) {
	return class withFormSpree extends Component {
		constructor() {
			super()
			this.sendToFormSpree = this.sendToFormSpree.bind(this)
		}
		sendToFormSpree(formData) {}
		render() {
			return <ComponentToWrap formspreeCallback={this.sendToFormSpree} />
		}
	}
}