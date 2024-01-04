import React, { Component } from "react";
import dataglasses from "../Data/DataGlasses.json";
export default class MainRGlasses extends Component {
  state = {
    glasses: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  test = (glasses) => {
    console.log(glasses.id);
    const newglasses = {
      id: glasses.id,
      price: glasses.price,
      name: glasses.name,
      url: glasses.url,
      desc: glasses.desc,
    };
    this.setState({
      glasses: {
        ...this.state.glasses,
        ...newglasses,
      },
    });
  };
  renderGlasses = () => {
    return dataglasses.map((glasses, index) => {
      return (
        <img
          key={index}
          src={glasses.url}
          alt={this.state.glasses.name}
          className="w-[75px] h-[75px] cursor-[pointer] object-contain"
          onClick={() => {
            this.test(glasses);
          }}
        />
      );
    });
  };
  render() {
    return (
      <div class="bg-sky-300 min-h-[590px]">
        <div className="flex flex-col items-center pt-[40px] ">
          <div className="flex flex-fow justify-center items-start ">
            <div className="relative">
              <img
                src="./glassesImage/model.jpg"
                alt=""
                className="w-[400px] h-[400px] object-contain"
              />
              <div className="absolute top-[115px] left-[30%] opacity-60">
                <img
                  src={this.state.glasses.url}
                  alt=""
                  className=" h-[50px]"
                />
              </div>
            </div>
            <div>
              <h1 className="text-[24px] font-bold  mb-[12px]">
                Thong tin ve san pham{" "}
              </h1>
              <p className="mb-[12px]">
                Name:{" "}
                <span className="font-bold">{this.state.glasses.name} </span>
              </p>
              <p className="mb-[12px]">
                Price:{" "}
                <span className="font-bold"> ${this.state.glasses.price} </span>
              </p>
              <img src={this.state.glasses.url} alt="" className=" h-[75px]" />
              <p className=" w-[300px] mt-[30px]">
                Desc : {this.state.glasses.desc}
              </p>
            </div>
          </div>
          <h2 className="bg-[#ffffff] text-[#000000] mt-[12px] p-4">
            Click vao kinh de thay doi{" "}
          </h2>
          <div className="mt-[20px] bg-[#ffffff] p-4 flex flex-row gap-[24px] items-cennter">
            {this.renderGlasses()}
          </div>
        </div>
      </div>
    );
  }
}
