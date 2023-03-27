import { useState } from "react";
import Bucket from "./components/Bucket/Bucket";
import Card from "./components/Card/Card";
import Play from "./components/Card/Play";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-5">
      <Bucket/>
      {/* <Card/> */}
      {/* <Play/> */}
    </div>
  );
}

export default App;
