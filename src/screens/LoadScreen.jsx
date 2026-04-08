import { useEffect, useState } from "react";
import "../css/BootScreen.css";
import { useMenuSettingsStore } from "../state/MenuSettingsStore";
import { useCurrentGameStore } from "../state/CurrentGameStore";
import { usePromptStore } from "../state/PromptStore";

export const LoadScreen = ({ setActiveScreen }) => {
  const menuSettings = useMenuSettingsStore((state) => state.menuSettings);
  const prompts = usePromptStore((state) => state.prompts);
  const updateCurrentGame = useCurrentGameStore(
    (state) => state.updateCurrentGame,
  );
  const [map, setMap] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    updateCurrentGame({
      id: Math.floor(Math.random() * 10000),
      dateSaved: new Date(),
      lastPlayed: new Date(),
      gameSettings: menuSettings,
      setupPrompts: {
        setup: prompts.setup,
        gameSummary: prompts.newGameSummary,
        playerAction: prompts.newGamePlayerAction,
      },
    });

    const countUp = () => {
      setMap((prev) => [...prev, 0]);
      setCount((count) => count + 1000);
    };
    const intervalId = setInterval(countUp, 1000);
    setTimeout(() => {
      setActiveScreen(3);
    }, 9000);
    return () => clearInterval(intervalId);
  }, [map, count]);

  return (
    <div className="screen-container">
      <div className="loading-bar-container">
        {map.map((m) => {
          return <div className="loading-item"></div>;
        })}
      </div>
    </div>
  );
};
