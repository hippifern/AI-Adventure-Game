import { useLayoutEffect, useState } from "react";
import "./css/App.css";
import { BootScreen } from "./screens/BootScreen";
import { MainMenu } from "./screens/MainMenu";
import { LoadScreen } from "./screens/LoadScreen";
import { useBootStore } from "./state/BootStore";
import { GameScreen } from "./screens/GameScreen";
import { GameScreenEnd } from "./screens/GameEndScreen";

function App() {
  const loadBootCheck = useBootStore((state) => state.loadBootCheck);
  const bootActive = useBootStore((state) => state.bootActive);
  const [activeScreen, setActiveScreen] = useState(0);

  useLayoutEffect(() => {
    loadBootCheck();
    if (bootActive) {
      setActiveScreen(1);
    }
  }, [bootActive]);

  return (
    <div className="parent-container">
      <div className="inner-container">
        <div className="title-outer">
          <div className="title-inner">
            <h1>== DUNGEON.EXE ==</h1>
          </div>
        </div>
        <div className="active-section-outer">
          {/* renders navbar options */}
          {activeScreen === 3 ? (
            <div className="alt-section">
              <div className="inner-upper">
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="alt-options">
                <button
                  onClick={() => {
                    setActiveScreen(1);
                  }}
                  className="alt-button"
                >
                  Quit
                </button>
              </div>
            </div>
          ) : (
            <div className="active-section-inner-upper">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          )}
          {/* renders screen options */}
          <div className="active-section-inner-lower">
            {activeScreen === 0 && bootActive === "true" ? (
              <BootScreen setActiveScreen={setActiveScreen} />
            ) : activeScreen === 1 ? (
              <MainMenu setActiveScreen={setActiveScreen} />
            ) : activeScreen === 2 ? (
              <LoadScreen setActiveScreen={setActiveScreen} />
            ) : activeScreen === 3 ? (
              <GameScreen setActiveScreen={setActiveScreen} />
            ) : activeScreen === 4 ? (
              <GameScreenEnd setActiveScreen={setActiveScreen} />
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
