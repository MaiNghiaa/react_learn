import React, { Component } from "react";

export default class ItemPhone extends Component {
  render() {
    return (
      <div className="w-[auto] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl   ">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={this.props.stateDefault.phone.hinhAnh}
          alt
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Thông số kĩ thuật
          </h5>
          <table className="w-[400px]">
            <tr>
              <th className="float-left">Tên sản phẩm : </th>
              <td>{this.props.stateDefault.phone.tenSP}</td>
            </tr>
            <tr>
              <th className="float-left">ManHinh : </th>
              <td>{this.props.stateDefault.phone.manHinh}</td>
            </tr>
            <tr>
              <th className="float-left">Hệ điều hành : </th>
              <td>{this.props.stateDefault.phone.heDieuHanh}</td>
            </tr>
            <tr>
              <th className="float-left">Camera Trước : </th>
              <td>{this.props.stateDefault.phone.cameraTruoc}</td>
            </tr>
            <tr>
              <th className="float-left">Camera Sau : </th>
              <td>{this.props.stateDefault.phone.cameraSau}</td>
            </tr>
            <tr>
              <th className="float-left">Ram : </th>
              <td>{this.props.stateDefault.phone.ram}</td>
            </tr>
            <tr>
              <th className="float-left">Rom : </th>
              <td>{this.props.stateDefault.phone.rom}</td>
            </tr>
            <tr>
              <th className="float-left">Giá bán : </th>
              <td>{this.props.stateDefault.phone.giaBan.toLocaleString()} d</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
