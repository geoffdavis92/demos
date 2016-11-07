import React, { Component } from 'react'
import AJAX from 'ajax.js'
import ReactDOM from 'react-dom'

const SLIDES = 4;

class App extends Component {
	constructor(props) {
		super(props);
		this.prevSlide = this.prevSlide.bind(this)
		this.nextSlide = this.nextSlide.bind(this)
		this.state = {
			prevSlide: 0,
			currentSlide: {
				number: 1,
				html: null
			},
			nextSlide: 2
		}
	}
	componentDidMount() {
		document.querySelector('body').setAttribute('data-slide',this.state.currentSlide.number)
		AJAX.get(`/slides/0${this.state.currentSlide.number}.html`, null, (file) => {
			return this.setState({ currentSlide: {number: 1, html:{__html: file}} });
		})
	}
	prevSlide() {
		AJAX.get(`/slides/0${this.state.prevSlide}.html`, null, (file) => {
			document.querySelector('body').setAttribute('data-slide',this.state.prevSlide)
			return this.setState({
				prevSlide: (this.state.prevSlide - 1),
				currentSlide: {
					number: this.state.prevSlide, 
					html:{__html: file}
				},
				nextSlide: this.state.currentSlide.number 
			});
		})
	}
	nextSlide() {
		AJAX.get(`/slides/0${this.state.nextSlide}.html`, null, (file) => {
			document.querySelector('body').setAttribute('data-slide',this.state.nextSlide)
			return this.setState({
				prevSlide: this.state.currentSlide.number,
				currentSlide: {
					number: this.state.nextSlide, 
					html:{__html: file}
				},
				nextSlide: (this.state.nextSlide + 1) 
			});
		})
	}
	render() {
		return (
			<section id="slideshow">
				<article dangerouslySetInnerHTML={this.state.currentSlide.html}>
				</article>
				<nav>
					<input type="button" onClick={this.prevSlide} className="NavButton" value="Previous" disabled={this.state.prevSlide < 1 ? true : false}/>
					<input type="button" onClick={this.nextSlide} className="NavButton" value="Next" disabled={this.state.nextSlide > SLIDES ? true : false}/>
				</nav>
			</section>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));