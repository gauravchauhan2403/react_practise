import React from "react"

const HeaderComp = () => (
  <div className="container" style={{display: "flex", flexGrow: '4', justifyContent: "space-between", width: "100%"}}>
    <img id="logo" alt='logo' src={null} />
    <div className="searchDiv">
      <input alt="search"></input>
      <button>Search</button>
    </div>
    <img id="user" alt="user" src={null} />
  </div>
);

export default HeaderComp