import { useState, useEffect } from "react";
import "../css/BootScreen.css";
import { useBootStore } from "../state/BootStore";
import { useGameDataStore } from "../state/GameDataStore";
import { pickRandom } from "../supportFunctions.js";

export const BootScreen = ({ setActiveScreen }) => {
  const updateBootActive = useBootStore((state) => state.updateBootActive);
  const bootPhrases = useGameDataStore((state) => state.bootPhrases);
  const [activePhrase, setActivePhrase] = useState();
  const [loops, setLoops] = useState(0);

  const onClickBootButton = () => {
    updateBootActive();
    setActiveScreen(1);
  };

  useEffect(() => {
    const { randomValue } = pickRandom(bootPhrases);
    setActivePhrase(randomValue);
    setLoops((loops) => loops + 1);
    const intervalId = setInterval(() => pickRandom(bootPhrases), 1500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="screen-container">
      {loops >= 5 ? (
        <button onClick={onClickBootButton}>Boot the Adventure</button>
      ) : (
        <h2 className="loading-text">{activePhrase}</h2>
      )}
    </div>
  );
};
