import React, { Component } from "react";

export default class ListXeQuanLy extends Component {
  renderXeQuanLy = () => {
    return this.props.ListProduct.map((items, index) => {
      return (
        <div className="group relative ">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={items.img}
              alt={items.name}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href="#">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 center"
                    onClick={() => {
                      this.props.SanPhamClick(items);
                    }}
                    key={index}
                  />
                  {items.name}
                </a>
              </h3>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {this.renderXeQuanLy()}
          </div>
        </div>
      </div>
    );
  }
}
