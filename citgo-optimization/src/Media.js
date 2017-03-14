// Media @flow
import React, { Component } from 'react'
import './styles/Media.css'

export default class Media extends Component {
  constructor() {
    super();
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
  	this.setState({ isActive: !this.state.isActive })
  }
  render() {
    const { data, image, header } = this.props;
    return (
      <article className={`mediaObject${ this.state.isActive ? ' mediaObject-click' : '' }`} onClick={this.handleClick}>
        <figure className="mediaObject_thumb">
          <img className="mediaObject_thumb_image" src={image.src} alt={image.alt} />
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>
        <div className="mediaObject_content">
	        <header className="mediaObject_header">
	          <a href={data.outLink} className="mediaObject_header_link">
	            <h3 className="mediaObject_header_title">{header.title}</h3>
	          </a>
	          {header.subtitle &&
	            <small className="mediaObject_header_subtitle">
	              {header.subtitle}
	            </small>}
	        </header>
	        <main className="mediaObject_body">
	          {this.props.children}
	        </main>
	    </div>
      </article>
    );
  }
}