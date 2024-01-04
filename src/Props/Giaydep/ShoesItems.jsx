import React, { Component } from "react";

export default class ShoesItems extends Component {
  render() {
    return (
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={this.props.Items.image}
            alt="Front of men's Basic Tee in black."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                {this.props.Items.name}
              </a>
            </h3>
            <p className="mt-1 text-[12px] text-gray-500">
              {this.props.Items.description}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            $ {this.props.Items.price}
          </p>
        </div>
      </div>
    );
  }
}
