import { useEffect, useState } from "react";
import "../css/BootScreen.css";
import { useMenuSettingsStore } from "../state/MenuSettingsStore";
import { useCurrentGameStore } from "../state/CurrentGameStore";

export const LoadScreen = () => {
  const menuSettings = useMenuSettingsStore((state) => state.menuSettings);
  const currentGame = useCurrentGameStore((state) => state.currentGame);
  const [activeImage, setActiveImage] = useState();
  const [loops, setLoops] = useState(0);
  const images = [];

  const onClick = () => {};

  useEffect(() => {
    console.log(menuSettings);
    console.log(currentGame);
    const pickRandom = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setActiveImage(images[randomIndex]);
      setLoops((loops) => loops + 1);
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
