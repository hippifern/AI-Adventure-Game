import "../css/GameScreen.css";
import arrow from "../assets/arrow.png";
import castle from "../assets/fantasy-castle.png";
import { useCurrentGameStore } from "../state/CurrentGameStore";
import { usePlayerStore } from "../state/PlayerStore";
import { GoogleGenAI } from "@google/genai";
import { useEffect, useState } from "react";

export const GameScreen = () => {
  const currentGame = useCurrentGameStore((state) => state.currentGame);
  const playerStats = usePlayerStore((state) => state.playerStats);
  const [latestReply, setLatestReply] = useState("");

  const ai = new GoogleGenAI({
    apiKey: "",
  });

  console.log(currentGame);

  return (
    <div className="container">
      <div className="game-container">
        <div className="upper">
          <div className="image-container">
            <img
              className="imagery"
              src={castle}
              alt=""
              height={350}
              width={350}
            />
          </div>
          <div className="stats-container">
            <div className="stats-title">
              <div className="line one"></div>
              <h3>Player Stats</h3>
              <div className="line two"></div>
            </div>
            <div className="stats">
              <div className="stat-list">
                <div className="stats-item">
                  <h3>Health:</h3>
                  <h3>{playerStats.health}/10</h3>
                </div>
                <div className="stats-item">
                  <h3>Energy:</h3>
                  <h3>{playerStats.energy}/10</h3>
                </div>
                <div className="stats-item">
                  <h3>Strength:</h3>
                  <h3>{playerStats.strength}/10</h3>
                </div>
                <div className="stats-item">
                  <h3>Luck:</h3>
                  <h3>{playerStats.luck}/10</h3>
                </div>
              </div>
              <div className="inv-container">
                <h3 className="inv-title">Inventory</h3>
                <div className="stats-item inventory">
                  <h3>{playerStats.inventory.primary}</h3>
                  <h3>{playerStats.inventory.pickUpOne}</h3>
                  <h3>{playerStats.inventory.pickUpTwo}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mid">
          <div className="name-container">
            <div className="line one"></div>
            <h3>Text Adventure</h3>
            <div className="line two"></div>
          </div>
        </div>
        <div className="lower">
          <div className="textbox-container">
            <p>{latestReply}</p>
          </div>
          <div className="typingbox-container">
            <img className="icon" src={arrow} alt="" />
            <input type="text" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};
