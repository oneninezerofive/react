import { Component as C, createElement as h } from "react";

class Mine extends C {
  render() {
    return h("div", null, "Mine\u9875\u9762");
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "react"
    };
  }

  componentDidMount() { }
}

Mine.css = ``;
export default Mine;
