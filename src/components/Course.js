import React, { Component } from "react";

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 6,
      title: "React",
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { day: props.courseDay };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ title: "Javascript" });
    }, 5000);
  }

  //Grants permission for update
  shouldComponentUpdate() {
    return true
  }

  render() {
    const { day, title } = this.state;
    return (
      <p>
        {title} Class - Day {day}
      </p>
    );
  }
}

export default Course;
