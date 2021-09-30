import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };

    this.imageRef = React.createRef();
    // the above line creates a refrence object for the dom element, the element gets loaded
    // when we pass this ref variable to it as props
  }

  componentDidMount() {
    // making sure to call the setSpans() after the image loads
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    // 10 === 10px row height
    const spans = Math.ceil(height / 10);
    //10 px row height makes the images to be stacked vertically as close as possible

    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
