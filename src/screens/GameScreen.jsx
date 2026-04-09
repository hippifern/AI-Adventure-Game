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
  const updateMessageList = useCurrentGameStore(
    (state) => state.updateMessageList,
  );
  const [messageHistoryParsed, setMessageHistoryParsed] = useState([]);
  const [latestMessage, setLatestMessage] = useState("");
  const [latestReply, setLatestReply] = useState("");

  useEffect(() => {
    const messageHistoryParsed2 = currentGame.messageList.map((message) => {
      const preppedReply = message.ai_reply.split("\n");
      return preppedReply;
    });
    setMessageHistoryParsed(messageHistoryParsed2);
  }, [latestReply]);

  const handleChange = (event) => {
    if (event.key === "Enter") {
      console.log(
        `Previous Conversation:\n${JSON.stringify(currentGame.messageList)}\nLatest Player action:\n${event.target.value}`,
      );
      getAIReply(
        `Previous Conversation:\n${JSON.stringify(currentGame.messageList)}\nLatest Player action:\n${event.target.value}`,
      );
      setLatestMessage(event.target.value);
    }
  };

  async function getAIReply(message) {
    const response = await currentGame.ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: message,
    });
    updateMessageList({
      player_message: message,
      ai_reply: response.text,
    });
    setLatestReply(response.text);
  }

  return (
    <div className="container">
      <div className="game-container">
        <div className="upper">
          <div className="image-container">
            <img
              className="imagery"
              src={castle}
              alt=""
              height={150}
              width={150}
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
            {messageHistoryParsed.map((messageArray, index) => {
              if (index >= 1) {
                return messageArray.map((line) => {
                  return (
                    <>
                      <p>{line}</p>
                      <br />
                    </>
                  );
                });
              }
            })}
          </div>
          <div className="last-action-container">
            <h4>Last Action:</h4>
            <p>{latestMessage}</p>
          </div>
          <div className="typingbox-container">
            <img className="icon" src={arrow} alt="" />
            <input type="text" name="" id="" onKeyDown={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};
