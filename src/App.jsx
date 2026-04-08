import { useLayoutEffect, useState } from "react";
import "./css/App.css";
import { BootScreen } from "./screens/BootScreen";
import { MainMenu } from "./screens/MainMenu";
import { LoadScreen } from "./screens/LoadScreen";
import { useBootStore } from "./state/BootStore";
import { useSavedGameStore } from "./state/SavedGameStore";

function App() {
  const loadBootCheck = useBootStore((state) => state.loadBootCheck);
  const bootActive = useBootStore((state) => state.bootActive);
  const [activeScreen, setActiveScreen] = useState(0);

  useLayoutEffect(() => {
    loadBootCheck();
    if (bootActive === "false") {
      setActiveScreen(1);
    }
  }, [bootActive]);

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
            {activeScreen === 0 && bootActive === "true" ? (
              <BootScreen setActiveScreen={setActiveScreen} />
            ) : activeScreen === 1 ? (
              <MainMenu setActiveScreen={setActiveScreen} />
            ) : activeScreen === 2 ? (
              <LoadScreen />
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
