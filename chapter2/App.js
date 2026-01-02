 import React from "react";
 import ReactDOM from "react-dom/client";
 import HeaderComp from "./assignments/Header"

//  usign react element

// const heading = React.createElement("h1", {id:"heading"}, "Namaste Chacahaaaaa!!!");

// using JSX - which is transpilled by Babel into react element written above.

const headingJSX = <h1 id="heading">Namsate JSX chahchaaa...!!</h1>

const headingElement= <h1 id="heading">Element</h1>

// ***********************REACT COMPONENT *************
const Comp1 = () => <h1 className="head2">Namaste se pehle ka component</h1>

// isme semicolon nhi lagta beech mai khi bhi, wrna display pe dikehga. ALso render one component in another
// is called component composition.
const HeadingComp = () => (
  <div id="container">

    <HeaderComp />
    {headingElement}
    {/* paasing element in component using {} */}
    {Comp1 ()}       
    { /** calling component as javascript function as we can write any javascript inside { } */}
    <Comp1 />
    <Comp1></Comp1>
    {/* Above all three are same things */}
    <h1 className="heading1">Namaste from React Component</h1>
  </div>

);

 const root = ReactDOM.createRoot(document.getElementById("root"));

//  root.render(heading);
//  root.render(headingJSX);
root.render(<HeadingComp />)