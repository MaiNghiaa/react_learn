import React, { Component } from "react";

export default class ChiaLayoutHeader2 extends Component {
  render() {
    return (
      <header className="bg-[#595959] text-white py-5 px-6 flex justify-between items-center fixed top-0 left-0 right-0">
        <div className="font-bold">Start Bootstrap</div>
        <div className="Nav mr-[100px]">
          <ul className="nav-list flex gap-12">
            <li className="nav-item">
              <a href="" className="nav-item__link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-item__link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-item__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
