import React, { Component } from "react";

export default class XeHoi extends Component {
  render() {
    return (
      <div className="flex items-center gap-[12px]">
        <div className="w-[80%]">
          <img
            src={require("../assets/CarBasic/products/black-car.jpg")}
            alt=""
            className="w-[100%]"
          />
          <div>duoi </div>
        </div>
        <div className="w-[40%]">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="pb-[12px]">
              <div class=" text-xl mb-2 bg-[#cccccc] py-[10px] px-[8px] border-b-[1px] border-[#000000]">
                The exterior Color
              </div>
            </div>
            <div class="px-6 pt-4 pb-10">
              <div className="flex flex-col gap-[12px]">
                <div className="flex flex-start items-center gap-[24px] border border-[#cccccc] px-[12px] py-[12px]">
                  <img
                    className="w-[30%]"
                    src={require("../assets/CarBasic/icons/icon-black.jpg")}
                    alt=""
                  />
                  <div>
                    <h1 className="text-[16px] font-bold">Crystal Black</h1>
                    <p>Paerl</p>
                  </div>
                </div>
                <div className="flex flex-start items-center gap-[24px] border border-[#cccccc] px-[12px] py-[12px]">
                  <img
                    className="w-[30%]"
                    src={require("../assets/CarBasic/icons/icon-steel.jpg")}
                    alt=""
                  />
                  <div>
                    <h1 className="text-[16px] font-bold">Modern Steel</h1>
                    <p>metaric</p>
                  </div>
                </div>
                <div className="flex flex-start items-center gap-[24px] border border-[#cccccc] px-[12px] py-[12px]">
                  <img
                    className="w-[30%]"
                    src={require("../assets/CarBasic/icons/icon-red.jpg")}
                    alt=""
                  />
                  <div>
                    <h1 className="text-[16px] font-bold">Crystal Black</h1>
                    <p>Paerl</p>
                  </div>
                </div>
                <div className="flex flex-start items-center gap-[24px] border border-[#cccccc] px-[12px] py-[12px]">
                  <img
                    className="w-[30%]"
                    src={require("../assets/CarBasic/icons/icon-silver.jpg")}
                    alt=""
                  />
                  <div>
                    <h1 className="text-[16px] font-bold">Silver Black</h1>
                    <p>Silver</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
