import React, { Component } from "react";
import ChiaLayout_Header from "./Sections/ChiaLayout_Header";
import ChiaLayout_Main from "./Sections/ChiaLayout_Main";
import ChiaLayout_Footer from "./Sections/ChiaLayout_Footer";

export default class HomeController extends Component {
  render() {
    return (
      <div className="w-100vh">
        <ChiaLayout_Header />
        <ChiaLayout_Main />
        <ChiaLayout_Footer />
      </div>
    );
  }
}
