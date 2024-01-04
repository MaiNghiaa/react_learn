import React, { Component } from "react";
import dataphone from "../Data/DataPhones.json";
import CartPhone from "./CartPhone";
import PageListPhones from "./PageListPhones";
export default class MainCartPhones extends Component {
  state = {
    gioHang: [
      // {
      //   maSP: 1,
      //   tenSP: "VinSmart Live",
      //   manHinh: "AMOLED, 6.2, Full HD+",
      //   heDieuHanh: "Android 9.0 (Pie)",
      //   cameraTruoc: "20 MP",
      //   cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      //   ram: "4 GB",
      //   rom: "64 GB",
      //   giaBan: 5700000,
      //   hinhAnh: "./img/vsphone.jpg",
      // },
    ],
  };
  themGioHang = (sanPham) => {
    console.log(sanPham);
    let spGioHang = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      giaBan: sanPham.giaBan,
      soLuong: 1,
      hinhAnh: sanPham.hinhAnh,
    };

    //tim xem san pham co trong gio hang chua
    let index = this.state.gioHang.findIndex(
      (spGH) => spGH.maSP === spGioHang.maSP
    );
    if (index != -1) {
      this.state.gioHang[index].soLuong += 1;
    } else {
      this.state.gioHang.push(spGioHang);
    }

    // this.state.gioHang.push(spGioHang);
    // let gioHangCapnhat = [...this.state.gioHang, spGioHang];
    this.setState({
      gioHang: this.state.gioHang,
    });
  };
  render() {
    return (
      <div>
        <PageListPhones dataphone={dataphone} themGioHang={this.themGioHang} />
        <CartPhone gioHang={this.state.gioHang} />
      </div>
    );
  }
}
