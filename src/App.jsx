import React from "react";
import CanvasContainer from "./components/CanvasContainer";
import Overlay from "./components/Overlay";

function App() {
  return (
    <div className="relative w-full h-screen">
      <CanvasContainer />
      <Overlay />
    </div>
  );
}

export default App;
