
import React, { useState, useEffect } from "react";
import Addform from "./components/Addform";
// import TestComp from "./components/TestComp";


function App() {
  return (
    <div style={{ backgroundColor: "lightgoldenrodyellow" }}>
      <h1 style={{ fontFamily: "inherit", textDecoration: "underline" }}>Todos </h1>
      <Addform >   </Addform> 
    </div>
  )
}

export default App;
