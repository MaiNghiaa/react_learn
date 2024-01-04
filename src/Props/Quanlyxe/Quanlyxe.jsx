import React, { Component } from "react";
import ListXeQuanLy from "./ListXeQuanLy";
import ItemsXechitiest from "./ItemsXechitiest";

export default class Quanlyxe extends Component {
  product = [
    { id: 1, name: "black car", img: "./img/products/black-car.jpg" },
    { id: 2, name: "red car", img: "./img/products/red-car.jpg" },
    { id: 3, name: "silver car", img: "./img/products/silver-car.jpg" },
  ];
  state = {
    Chitiet: { id: 1, name: "black car", img: "./img/products/black-car.jpg" },
  };
  ThayDoi = (sanphamclick) => {
    this.setState((StateCu) => ({
      phone: {
        ...StateCu.ChiTiet,
        ...sanphamclick,
      },
    }));
  };
  render() {
    return (
      <div>
        <ListXeQuanLy ListProduct={this.product} SanPhamClick={this.ThayDoi} />
        <ItemsXechitiest ChiTietsp={this.state} />
      </div>
    );
  }
}
