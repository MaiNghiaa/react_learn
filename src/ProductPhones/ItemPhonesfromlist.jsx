import React, { Component } from "react";

export default class ItemPhonesfromlist extends Component {
  render() {
    return (
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={this.props.items.hinhAnh}
            alt="Front of men's Basic Tee in black."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-center items-center flex-col gap-[12px]">
          <h3 className="text-sm text-gray-700">
            <span className="absolute inset-0" />
            {this.props.items.tenSP}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {this.props.items.ram} / {this.props.items.rom}
          </p>
          <p className="text-sm font-medium text-gray-900">
            {this.props.items.giaBan.toLocaleString()} đ
          </p>
          <button
            onClick={() => {
              // console.log(this.props.items);
              this.props.stateListPhones(this.props.items);
            }}
            className="z-[99] py-[6px] px-[12px] bg-sky-100 border border-[#cccccc] cursor-pointer"
          >
            Xem chi tiết{" "}
          </button>
        </div>
      </div>
    );
  }
}
