import React, { Component } from "react";

export default class ChiaLayoutMain2 extends Component {
  render() {
    return (
      <main className="mt-[82px] ">
        <div className="wrapper mx-[112px]">
          <div className="content px-[34px] py-8 bg-[#f1eded] flex flex-col items-center">
            <h1 className="text-center font-bold text-[42px]">
              A warn Welcome
            </h1>
            <p className="text-center w-[900px] mt-5 mb-7">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <button className=" margin-auto flex justify-center items-center py-3 px-3 bg-blue-500 text-white hover:bg-sky-400 rounded-sm">
              Call to action
            </button>
          </div>
          <div className="mt-12">
            <ul className="Use-list grid grid-cols-[repeat(3,1fr)] grid-row-auto gap-5">
              <li className="Use-items bg-[#f1eded] py-12 px-8 ">
                <h2 className="text-[32px] text-black text-center">
                  Fresh new layout
                </h2>
                <p className="text-center mt-4">
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </p>
              </li>
              <li className="Use-items bg-[#f1eded]  py-12 px-8">
                <h2 className="text-[32px] text-black text-center">
                  Free to download
                </h2>
                <p className="text-center mt-4">
                  As always, Start Bootstrap has a powerful collectin of free
                  templates.
                </p>
              </li>
              <li className="Use-items bg-[#f1eded]  py-12 px-8">
                <h2 className="text-[32px] text-black text-center">
                  Jumbotron hero header
                </h2>
                <p className="text-center mt-4">
                  The heroic part of this template is the jumbotron hero header!
                </p>
              </li>
              <li className="Use-items bg-[#f1eded]  py-12 px-8">
                <h2 className="text-[32px] text-black text-center">
                  Feature boxes
                </h2>
                <p className="text-center mt-4">
                  We've created some custom feature boxes using Bootstrap icons!
                </p>
              </li>
              <li className="Use-items bg-[#f1eded]  py-12 px-8">
                <h2 className="text-[32px] text-black text-center">
                  Simple clean code
                </h2>
                <p className="text-center mt-4">
                  We keep our dependencies up to date and squash bugs as they
                  come!
                </p>
              </li>
              <li className="Use-items bg-[#f1eded]  py-12 px-8">
                <h2 className="text-[32px] text-black text-center">
                  A name you trust
                </h2>
                <p className="text-center mt-4">
                  Start Bootstrap has been the leader in free Bootstrap
                  templates since 2013!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}
