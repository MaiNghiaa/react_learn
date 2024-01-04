import React, { Component } from "react";
import arrayFeatures from "../Data/arrayFeatures.json";
import wheels from "../Data/wheels.json";

export default class RenderXeNangCao extends Component {
  renderImgLogo = () => {
    return arrayFeatures.map((itemsImg, index) => {
      return (
        <div
          className="flex flex-start items-center gap-[24px] border border-[#cccccc] px-[12px] py-[12px]"
          key={index}
        >
          <img className="w-[30%]" src={itemsImg.img} alt="" />
          <div>
            <h1 className="text-[16px] font-bold">{itemsImg.title}</h1>
            <p>{itemsImg.color}</p>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="flex items-center gap-[12px]">
        <div className="w-[50%]">
          <img
            src="./images/images-black/images-black-1/civic-1.jpg"
            alt=""
            className="w-[100%]"
          />
          <div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Silver</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-[20%]">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="pb-[12px]">
              <div class=" text-xl mb-2 bg-[#cccccc] py-[10px] px-[8px] border-b-[1px] border-[#000000]">
                The exterior Color
              </div>
            </div>
            <div class="px-6 pt-4 pb-10">
              <div className="flex flex-col gap-[12px]">
                {this.renderImgLogo()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
