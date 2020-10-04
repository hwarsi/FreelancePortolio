import React, { Component } from "react";

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph: [],
      image: [],
      UI: 0,
    };
    this.addParagraph = this.addParagraph.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  addParagraph() {
    this.setState((prevState) => ({
      paragraph: [...prevState.paragraph, {}],
    }));
    this.setState({ UI: "Paragraph" });
  }
  addImage() {
    this.setState((prevState) => ({
      image: [...prevState.image, {}],
    }));
    this.setState({ UI: "Image" });
  }

  chooseUIElement() {
    if (this.state.UI === "Paragraph") {
      return this.state.paragraph.map((e, i) => (
        <div key={i}>
          <textarea rows="6" cols="39" className="blogParagraph"></textarea>
        </div>
      ));
    } else {
      return this.state.image.map((e, j) => (
        <div key={j}>
          <input className="ImageURL" placeholder="Image URL"></input>{" "}
        </div>
      ));
    }
  }
  /*
  createParagraph() {
    return this.state.paragraph.map((e, i) => (
      <div key={i}>
        <textarea rows="6" cols="39" className="blogParagraph"></textarea>
      </div>
    ));
  }

  inputImage() {
    return this.state.image.map((e, j) => (
      <div key={j}>
        <input className="ImageURL" placeholder="Image URL"></input>{" "}
      </div>
    ));
  }
*/
  render() {
    return (
      <div>
        {this.chooseUIElement()}
        <button onClick={this.addParagraph}>Add Paragraph</button>
        <button onClick={this.addImage}>Add Image</button>
      </div>
    );
  }
}
export default BlogForm;
