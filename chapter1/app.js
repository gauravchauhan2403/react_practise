import React from "react";
import ReactDOM from "react-dom/client";
 
 const heading = React.createElement(
  "h1", 
  {id: "heading", xyz: "dummy"},
  "Hello from React"
  );

  // Nested elements in react

  /**
   * <div id="parent">
   *   <div id="child1">
   *      <h1>I am H1 tag</h1>
   *      <h2>I am H2 tag</h2>
   *   </div>
   *   <div id="child2">
   *      <h1>I am H1 tag</h1>
   *      <h2>I am H2 tag</h2>
   *   </div>
   * </div>
   */

  const parent = React.createElement( "div", 
                {id:"parent"},
                [    //array of children
                  React.createElement( "div",
                                    {id:"child1"}, 
                                    [   // array of values
                                      React.createElement("h1", {}, "Namaste Chachaaa.."),
                                      React.createElement("h2", {}, "I am H2 tag of child1")
                                    ]
                                  ),
                  React.createElement( "div",
                                    {id:"child2"}, 
                                    [ 
                                      React.createElement("h1", {}, "I am H1 tag of child2"),
                                      React.createElement("h2", {}, "I am H2 tag of child2")
                                    ]
                                  )
                ]
              )
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);