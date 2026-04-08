import "../css/MainMenu.css";
import { MainMenuOptions } from "../layout/MainMenuOptions";
import { MainMenuTitle } from "../layout/MainMenuTitle";
import sword from "../assets/sword.png";
import mask from "../assets/mask.png";
import hat from "../assets/witch-hat.png";
import arrow from "../assets/arrow.png";
import castle from "../assets/fantasy-castle.png";
import { useSavedGameStore } from "../state/SavedGameStore";

export const MainMenu = ({ setActiveScreen }) => {
  const savedGames = useSavedGameStore((state) => state.savedGames);

  const onClick = () => {
    setActiveScreen(2);
  };

  return (
    <div className="screen-container">
      <div className="left-column">
        <div className="left-upper">
          <img
            className="imagery"
            src={castle}
            alt=""
            height={350}
            width={350}
          />
        </div>
        <div className="left-lower">
          <div className="load-game-container">
            <MainMenuTitle titleText={"Load Saved Adventure"} />
            <MainMenuOptions
              options={[
                {
                  text: savedGames[0].title,
                  date: savedGames[0].dateSaved,
                  played: savedGames[0].lastPlayed,
                  icon: arrow,
                },
                {
                  text: savedGames[1].title,
                  date: savedGames[1].dateSaved,
                  played: savedGames[1].lastPlayed,
                  icon: arrow,
                },
                {
                  text: savedGames[2].title,
                  date: savedGames[2].dateSaved,
                  played: savedGames[2].lastPlayed,
                  icon: arrow,
                },
              ]}
              extraInfoActive={true}
            />
            <div className="load-button-container">
              <button onClick={onClick} className="load-button button">
                Load Adventure
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-column">
        <div className="title-right">
          <MainMenuTitle titleText={"Start A New Adventure"} />
        </div>
        <div className="genre-right">
          <MainMenuTitle titleText={"Choose Adventure Genre:"} />
          <MainMenuOptions
            name={"genre"}
            id={0}
            options={[
              {
                text: "Fantasy",
                icon: arrow,
              },
              {
                text: "Horror",
                icon: arrow,
              },
              {
                text: "Post-Apocalypse",
                icon: arrow,
              },
            ]}
          />
        </div>
        <div className="class-right">
          <MainMenuTitle titleText={"Choose Character Role:"} />
          <MainMenuOptions
            name={"playerClass"}
            id={1}
            options={[
              {
                text: "Rogue",
                icon: mask,
              },
              {
                text: "Fighter",
                icon: sword,
              },
              {
                text: "Healer",
                icon: hat,
              },
            ]}
          />
        </div>
        <div className="crazy-ai-right">
          <MainMenuTitle titleText={"Choose AI Craziness:"} />
          <MainMenuOptions
            name={"difficulty"}
            id={2}
            options={[
              {
                text: "Casual",
                icon: arrow,
              },
              {
                text: "Brutal",
                icon: arrow,
              },
              {
                text: "AI Hates Me",
                icon: arrow,
              },
            ]}
          />
        </div>
        <div className="start-button-container">
          <button onClick={onClick} className="start-button button">
            Start New Adventure
          </button>
        </div>
      </div>
    </div>
  );
};
