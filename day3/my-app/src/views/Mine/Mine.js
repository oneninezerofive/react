import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  p {
    color: red;
  }
`;

class Mine extends WeElement {
  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        null,
        h("p", null, "Mine\u9875\u9762"),
        h(
          "button",
          {
            onClick: this.hideInput.bind(this)
          },
          "ok"
        ),
        h(
          "button",
          {
            onClick: this.navTo.bind(this)
          },
          "Topic"
        ),
        h(
          "a",
          {
            onClick: this.hideInput.bind(this),
            href: "javascript:",
            className: "weui-search-bar__cancel-btn",
            id: "searchCancel"
          },
          "\u53D6\u6D88"
        ),
        h(
          "button",
          {
            onClick: this.hideInput.bind(this)
          },
          "ok"
        )
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "react"
    };
  }

  navTo() {
    console.log(1);
    this.props.location.push("/topic");
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }
}

Mine.css = `
    p {
        color: red
    }
`;
export default Mine;
