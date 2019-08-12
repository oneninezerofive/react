import { Component as WeElement, createElement as h } from "react";

class Header extends WeElement {
  constructor(...args) {
    super(...args);
    this.state = {
      name: "yao"
    };
  }

  render() {
    return h("div", null, h("p", null, this.state.name));
  }
}

Header.css = ``;
export default Header;
