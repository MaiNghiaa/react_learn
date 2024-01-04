import React, { Component } from "react";

export default class Renderwloop extends Component {
  productList = [
    {
      id: 1,
      name: "Black Car",
      price: "1000",
      img: "./carbasic/products/black-car.jpg",
    },
    {
      id: 2,
      name: "Steel Car",
      price: "2000",
      img: "./carbasic/products/steel-car.jpg",
    },
    {
      id: 3,
      name: "red Car",
      price: "3400",
      img: "./carbasic/products/red-car.jpg",
    },
    {
      id: 4,
      name: "silver Car",
      price: "6100",
      img: "./carbasic/products/silver-car.jpg",
    },
  ];

  renderTable = () => {
    let mangtrComponent = [];
    for (let i = 0; i < this.productList.length; i++) {
      let product = this.productList[i];
      //doi tuong jsx

      let trJSX = (
        <tr key={i}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} alt="" style={{ width: "100px" }} />
          </td>
          <td></td>
        </tr>
      );
      mangtrComponent.push(trJSX);
    }
    return mangtrComponent;
  };
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
