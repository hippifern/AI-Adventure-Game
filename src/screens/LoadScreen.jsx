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

  const updatePlayerInventory = usePlayerStore(
    (state) => state.updatePlayerInventory,
  );
  const [map, setMap] = useState([]);
  const [count, setCount] = useState(0);
  const ai = new GoogleGenAI({
    apiKey: "",
  });

  console.log(
    `The adventure is the ${menuSettings[0].settingSelectedName} genre (world description: ${menuSettings[0].settingSelectedDescription})\nThe player class is ${menuSettings[1].settingSelectedName} (class description: ${menuSettings[1].settingSelectedDescription})\nThe difficulty of the adventure should be ${menuSettings[2].settingSelectedName}`,
  );

  useLayoutEffect(() => {
    updateCurrentGame({
      gameSettings: menuSettings,
      gameSummary: `The adventure is the ${menuSettings[0].settingSelectedName} genre. 
      The player class is ${menuSettings[1].settingSelectedName} and 
      the difficulty of the adventure should be ${menuSettings[2].settingSelectedName}`,
      playerAction: "The player has not made an action yet.",
      messageList: [],
    });
    updatePlayerInventory(menuSettings[1].settingSelectedName);

    async function setupDungeonMasterOnLoad() {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite-preview",
        contents: `${currentGame.setupPrompts.setup} ${currentGame.setupPrompts.gameSummary} ${currentGame.setupPrompts.playerAction}`,
      });
      updateMessageList({
        player_message: currentGame.setupPrompts.playerAction,
        ai_reply: response.text,
      });
    }

    // setupDungeonMasterOnLoad();
  }, []);

  useEffect(() => {
    const countUp = () => {
      setMap((prev) => [...prev, 0]);
      setCount((count) => count + 1500);
    };
    const intervalId = setInterval(countUp, 1500);
    setTimeout(() => {
      setActiveScreen(3);
    }, 13500);
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
