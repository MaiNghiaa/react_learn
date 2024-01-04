import React, { Component } from "react";
import ItemsPhone from "./ItemsPhone";

export default class PageListPhones extends Component {
  renderItemphonesinList = () => {
    return this.props.dataphone.map((items, index) => {
      return (
        <ItemsPhone
          items={items}
          index={index}
          themGioHang={this.props.themGioHang}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {this.renderItemphonesinList()}
          </div>
        </div>
      </div>
    );
  }
}
