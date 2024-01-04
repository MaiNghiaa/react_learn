import React, { Component } from "react";

export default class CartPhone extends Component {
  renderSanphamCart = () => {
    let { gioHang } = this.props;

    return gioHang.map((gioHang, index) => {
      return (
        <div
          className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
          key={index}
        >
          <div className="flex w-2/5">
            {" "}
            {/* product */}
            <div className="w-20">
              <img className="h-24" src={gioHang.hinhAnh} alt />
            </div>
            <div className="flex flex-col justify-center ml-4 flex-grow">
              <span className="font-bold text-sm">{gioHang.tenSP}</span>
              <span className=" text-[8px]">{gioHang.manHinh}</span>
              <span className=" text-[8px]">
                {gioHang.ram} / {gioHang.rom} / {gioHang.cameraTruoc}
              </span>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <svg
              className="fill-current text-gray-600 w-3"
              viewBox="0 0 448 512"
            >
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
            <input
              className="mx-2 border text-center w-8"
              type="text"
              value={gioHang.soLuong}
            />
            <svg
              className="fill-current text-gray-600 w-3"
              viewBox="0 0 448 512"
            >
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">
            {gioHang.giaBan.toLocaleString()}
          </span>
          <span className="text-center w-1/5 font-semibold text-sm">
            $400.00
          </span>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container mx-auto mt-10">
        <div className="flex flex-col shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {this.renderSanphamCart()}
          </div>
          <div id="summary" className="w-1/4 px-8 py-10">
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
