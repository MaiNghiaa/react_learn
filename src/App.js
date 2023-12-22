import "./App.css";
import React from "react";
import HomeController1 from "./BaiTapChiaLayout/HomeController";
import HomeBaitapchialayout2 from "./BaiTapChiaLayout2/Home";
import BindingDataWithClass from "./BindingData/BindingDataWithClass";
import BindingDatawithFinctional from "./BindingData/BindingDatawithFinctional";
import State from "./State/State";
function App() {
  return (
    <div className="App">
      {/* <HomeController1 /> */}
      {/* <HomeBaitapchialayout2 /> */}
      {/* <BindingDataWithClass /> */}
      {/* <BindingDatawithFinctional />
      <BindingDataWithClass /> */}
      <State />
    </div>
  );
}

export default App;
