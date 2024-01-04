import React, { Component } from "react";
import HeaderRGlasses from "./HeaderRGlasses";
import FooterRGlaases from "./FooterRGlaases";
import MainRGlaases from "./MainRGlasses";
export default class GlassesRender extends Component {
  render() {
    return (
      <div>
        <HeaderRGlasses />
        <MainRGlaases />
        <FooterRGlaases />
      </div>
    );
  }
}
