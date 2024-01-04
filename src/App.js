import "./App.css";
import React from "react";
import HomeController1 from "./BaiTapChiaLayout/HomeController";
import HomeBaitapchialayout2 from "./BaiTapChiaLayout2/Home";
import BindingDataWithClass from "./BindingData/BindingDataWithClass";
import BindingDatawithFinctional from "./BindingData/BindingDatawithFinctional";
import State from "./State/State";
import XeHoi from "./XeHoi/XeHoi";
import Renderwloop from "./RenderWLoop/Renderwloop";
import Helloflim from "./renderfilm/Helloflim";
import GlassesRender from "./renderGlasses/GlassesRender";
import RenderXeNangCao from "./RenderXe2/RenderXeNangCao";
import PropsC from "./Props/Class/PropsC";
import PropsF from "./Props/Function/PropsF";
import DataShoes from "./Data/DataShoes.json";
import ListShoes from "./Props/Giaydep/ListShoes";
import Phones from "./ProductPhones/Phones";
import Quanlyxe from "./Props/Quanlyxe/Quanlyxe";
import MainCartPhones from "./PageCartPhones/MainCartPhones";
function App() {
  return (
    <div className="App">
      {/* <Helloflim /> */}
      {/* <HomeController1 /> */}
      {/* <HomeBaitapchialayout2 /> */}
      {/* <BindingDataWithClass /> */}
      {/* <BindingDatawithFinctional />
      <BindingDataWithClass /> */}
      {/* <State /> */}
      {/* <XeHoi /> */}
      {/* <Renderwloop /> */}
      {/* <GlassesRender /> */}
      {/* <RenderXeNangCao /> */}
      {/* <PropsC />
      <PropsF /> */}
      {/* <ListShoes DataShoes={DataShoes} /> */}
      {/* <Phones /> */}
      {/* <Quanlyxe /> */}
      <MainCartPhones />
    </div>
  );
}

export default App;
