import React from 'react';

class LqImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: props.img.preSrc,
            className: props.className,
            alt: props.alt
        };
        this.loadImg();
    }
    loadImg() {
        window.addEventListener('load', () => {
            let img = new Image();
            img.src = this.props.img.src;
            img.onload = () => {
                this.setState({ src: this.props.img.src });
            };
        })
    }
    render() {
        return (
            <img src={this.state.src} className={this.state.className} alt={this.state.alt} />
        );
    }
}

export default LqImg;