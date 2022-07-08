import React from "react";

// import ReactDOM from "react-dom"; BEFORE! REACT 17
import { createRoot } from "react-dom/client";

import App from "@routes/App";

// ReactDOM.render(<App/>, document.getElementById("app")); BEFORE! REACT 17
const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="Login" />);

// import React, { useState } from 'react';----------------------////

// const Button = () => {
//     const [name, setName] = useState("Hola Mundo");
//     return (
//         <div>
//             <h1>{name}</h1>
//         </div>
//     );
// }
//STATEFUL COMPONENT ^||^---------------------------------------/////

// import React from 'react';

// // const Button = ({text}) => <ButtonRed text={text} />;
// ********************************************************************
// const Botton = () => (
//     <div>
//         <h1>{name}</h1>
//     </div>
// )

//STATELESS COMPONENT ^||^ -----------------------------------/////

// import React, { Component } from 'react';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello World!</h1>
//             </div>
//         );
//     }
// }

//CLASS COMPONENT ^||^---------------------------////////

// import React, { Component } from 'react';

// function ComponentWrapper(WrapperComponent) {
//     class Wrapper extends Component {
//         render () {
//             return <WrapperComponent { ...this.props } />;
//         }
//     }
//     return Wrapper;
// }

//HIGH ORDER COMPONENT "HOG" ^||^-------------//


