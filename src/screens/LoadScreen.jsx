import { useEffect, useLayoutEffect, useState } from "react";
import "../css/BootScreen.css";
import { useMenuSettingsStore } from "../state/MenuSettingsStore";
import { useCurrentGameStore } from "../state/CurrentGameStore";
import { usePlayerStore } from "../state/PlayerStore";
import { GoogleGenAI } from "@google/genai";

export const LoadScreen = ({ setActiveScreen }) => {
  const menuSettings = useMenuSettingsStore((state) => state.menuSettings);
  const updateCurrentGame = useCurrentGameStore(
    (state) => state.updateCurrentGame,
  );
  const currentGame = useCurrentGameStore((state) => state.currentGame);
  const updateMessageList = useCurrentGameStore(
    (state) => state.updateMessageList,
  );

  const setPlayerStat = usePlayerStore((state) => state.setPlayerStat);
  const playerStats = usePlayerStore((state) => state.playerStats);

  const [map, setMap] = useState([]);
  const [count, setCount] = useState(0);
  const [messageListUpdated, setMessageListUpdated] = useState(false);
  const ai = new GoogleGenAI({
    apiKey: currentGame.api_key,
  });

  useLayoutEffect(() => {
    updateCurrentGame({
      gameSettings: menuSettings,
      gameSummary: `The adventure is the ${menuSettings[0].settingSelectedName} genre (World Description: ${menuSettings[0].settingSelectedDescription}) 
      The player class is ${menuSettings[1].settingSelectedName} (Class Description: ${menuSettings[1].settingSelectedDescription}) and 
      the difficulty of the adventure should be ${menuSettings[2].settingSelectedName}`,
      playerAction: "The player has not made an action yet.",
      ai: ai,
    });

    setPlayerStat(menuSettings[1].settingSelectedName);

    async function setupDungeonMasterOnLoad() {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite-preview",
        contents: `${currentGame.setupPrompts.setup} ${currentGame.setupPrompts.gameSummary} ${currentGame.setupPrompts.playerAction}`,
      });
      updateMessageList({
        player_message: currentGame.setupPrompts.playerAction,
        ai_reply: response.text,
      });
      setMessageListUpdated(true);
    }

    setupDungeonMasterOnLoad();
  }, []);

  useEffect(() => {
    const countUp = () => {
      setMap((prev) => [...prev, 0]);
      setCount((count) => count + 1500);
    };
    const intervalId = setInterval(countUp, 1500);
    if (messageListUpdated) {
      setTimeout(() => {
        setActiveScreen(3);
      }, 2000);
    }
    return () => clearInterval(intervalId);
  }, [map, count]);

  console.log(playerStats);
  return (
    <div className="screen-container">
      <div className="inner-load-container">
        {count < 4000 ? (
          <h2>{`Your Genre: ${menuSettings[0].settingSelectedName}`}</h2>
        ) : count < 8000 && count > 4000 ? (
          <h2>{`Your Class: ${menuSettings[1].settingSelectedName}`}</h2>
        ) : (
          <h2>{`Your Difficulty: ${menuSettings[2].settingSelectedName}`}</h2>
        )}
        <div className="loading-bar-container">
          {map.map((m) => {
            return <div className="loading-item"></div>;
          })}
        </div>
      </div>
    </div>
  );
};
