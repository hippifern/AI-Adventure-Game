import { useEffect, useState } from "react";
import "../css/BootScreen.css";
import { useMenuSettingsStore } from "../state/MenuSettingsStore";
import { useCurrentGameStore } from "../state/CurrentGameStore";
import { usePromptStore } from "../state/PromptStore";
export const LoadScreen = () => {
  const menuSettings = useMenuSettingsStore((state) => state.menuSettings);
  const prompts = usePromptStore((state) => state.prompts);

  const updateCurrentGame = useCurrentGameStore(
    (state) => state.updateCurrentGame,
  );
  const [activeImage, setActiveImage] = useState();
  const images = [];

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

    const pickRandom = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setActiveImage(images[randomIndex]);
    };
    pickRandom();
    const intervalId = setInterval(pickRandom, 1500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="screen-container">
      <img src={activeImage} alt="" />
    </div>
  );
};
