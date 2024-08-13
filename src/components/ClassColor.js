import React, { Component } from "react";

class ClassColor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
    };
  }

  handleChange = () => {
    this.setState({ color: "blue" });
  };
  // using componentDidMount lifecycle method
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "green" });
    }, 5000);
  }

  render() {
    const { color } = this.state;
    return (
      <>
        <div style={{ backgroundColor: color }}>Hello, World!</div>
        <h1>ClassColor: It has {color} color</h1>;
      </>
    );
  }
}

export default ClassColor;
