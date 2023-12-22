import React, { Component } from "react";

export default class BindingDataWithClass extends Component {
  //tao 1 thuoc tinh
  Random = "test"; // Chuooix
  RandomNum = 5;

  hamrender = () => {
    return <div>asdhasdjh</div>;
  };
  random = () => {
    alert("hello");
  };
  render() {
    //tao mot bien
    const studentInfo = {
      name: "Trung Nghia",
      age: 6,
      School: "dai hoc bach khoa ha noi",
    };

    return (
      <div>
        <h1 onClick={this.random}>BindingDataWithClass</h1>
        <p
          onclick={() => {
            console.log("adasd");
          }}
        >
          {this.Random} day la random so {this.RandomNum}
        </p>
        <p>{studentInfo.name}</p>
        <p>{this.hamrender()}</p>
      </div>
    );
  }
}
