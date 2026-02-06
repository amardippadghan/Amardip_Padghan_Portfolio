// import CanvasContainer from "./components/CanvasContainer";
import Overlay from "./components/Overlay";

function App() {
  return (
    <div className="relative w-full h-screen">
      {/* <CanvasContainer /> disabled due to runtime instability with Three.js/Drei */}
      <Overlay />
    </div>
  );
}

export default App;
