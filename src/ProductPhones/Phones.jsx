import React, { Component } from "react";
import ListPhones from "./ListPhones";
import ItemPhone from "./ItemPhone";
import DataPhones from "../Data/DataPhones.json";
export default class Phones extends Component {
  state = {
    phone: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };

  XemChiTiet = (sanphamchon) => {
    this.setState((prevState) => ({
      phone: {
        ...prevState.phone,
        ...sanphamchon,
      },
    }));
  };

  render() {
    return (
      <div className="flex flex-col ">
        <div>
          <ListPhones Dataphones={DataPhones} statePhones={this.XemChiTiet} />
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <ItemPhone stateDefault={this.state} />
        </div>
      </div>
    );
  }
}
