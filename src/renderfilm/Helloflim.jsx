// import React, { Component } from "react";
// import Headerfilm from "./Headerfilm";
// import datafilm from "./DataFilms.json";
// export default class Helloflim extends Component {
//   renderfilm = () => {
//     let contentfilm = datafilm.map((product, index) => {
//       return (
//         <a href="#" className="group" key={index}>
//           <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//             <img
//               src={product.hinhAnh}
//               alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
//               className="h-full w-full object-cover object-center group-hover:opacity-75"
//             />
//           </div>
//           <h3 className="mt-4 text-sm text-gray-700">{product.tenPhim}</h3>
//           <p className="mt-1 text-lg font-medium text-gray-900">
//             Rate : {product.danhGia}
//           </p>
//         </a>
//       );
//     });
//     return contentfilm;
//   };
//   render() {
//     return (
//       <div>
//         <header>
//           <Headerfilm />
//         </header>
//         <body>
//           <div className="bg-white">
//             <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//               <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//                 {this.renderfilm()}
//               </div>
//             </div>
//           </div>
//         </body>
//       </div>
//     );
//   }
// }
