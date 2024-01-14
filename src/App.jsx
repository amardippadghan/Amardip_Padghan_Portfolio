import React from "react";
import Navbar from "./components/Navbar";
import UpperSection from "./components/UpperSection";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <CustomCursor
        targets={[".link", ".your-css-selector"]}
        customClass="custom-cursor"
        dimensions={30}
        fill="#FFF"
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
      />
      <Navbar />
      <UpperSection />
      <Experience />
    </div>
  );
}

export default App;
