import { useState, useEffect } from "react";
import "../css/BootScreen.css";
import { useBootStore } from "../state/BootStore";

export const BootScreen = (props) => {
  const updateBootActive = useBootStore((state) => state.updateBootActive);

  const [activePhrase, setActivePhrase] = useState();
  const [loops, setLoops] = useState(0);
  const phrases = [
    "Loading the mainframe...",
    "Warming up the world engine...",
    "Brushing off the editor...",
    "Tweaking the nuts and bolts...",
    "Coffee break, back in 5 minutes...",
  ];

  const onClickBootButton = () => {
    updateBootActive();
    props.setActiveScreen(1);
  };

  useEffect(() => {
    const pickRandom = () => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setActivePhrase(phrases[randomIndex]);
      setLoops((loops) => loops + 1);
    };
    pickRandom();
    const intervalId = setInterval(pickRandom, 1500);
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
