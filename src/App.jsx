import { useState } from "react";
import "./css/App.css";
import { BootScreen } from "./screens/BootScreen";
import { MainMenu } from "./screens/MainMenu";

function App() {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <div className="parent-container">
      <div className="inner-container">
        <div className="title-outer">
          <div className="title-inner">
            <h1>== AI ADVENTURE TERMINAL ==</h1>
          </div>
        </div>
        <div className="active-section-outer">
          <div className="active-section-inner-upper">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="active-section-inner-lower">
            {activeScreen === 0 ? (
              <BootScreen setActiveScreen={setActiveScreen} />
            ) : activeScreen === 1 ? (
              <MainMenu />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="scanlines"></div>
    </div>
  );
}

export default App;
