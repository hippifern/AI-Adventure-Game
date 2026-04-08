import "../css/MainMenu.css";
import { MainMenuOptions } from "../layout/MainMenuOptions";
import { MainMenuTitle } from "../layout/MainMenuTitle";
import sword from "../assets/sword.png";
import mask from "../assets/mask.png";
import hat from "../assets/witch-hat.png";

export const MainMenu = () => {
  return (
    <div className="screen-container">
      <div className="left-column">
        <div className="left-upper">
          <img src="" alt="" />
        </div>
        <div className="left-lower">
          <div className="load-game-container">
            <MainMenuTitle titleText={"Load Saved Adventure"} />
            <MainMenuOptions
              options={[
                {
                  text: "Saved Adventure 1",
                },
                {
                  text: "Saved Adventure 2",
                },
                {
                  text: "Saved Adventure 3",
                },
              ]}
              extraInfoActive={true}
              extraInfo={["Date Saved", "Last Played"]}
            />
            <div className="load-button-container">
              <button className="load-button button">Load Adventure</button>
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
            options={[
              {
                text: "Fantasy",
              },
              {
                text: "Horror",
              },
              {
                text: "Medieval",
              },
              {
                text: "Post-Apocalypse",
              },
            ]}
          />
        </div>
        <div className="class-right">
          <MainMenuTitle titleText={"Choose Character Role:"} />
          <MainMenuOptions
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
            options={[
              {
                text: "Casual",
              },
              {
                text: "Brutal",
              },
              {
                text: "AI Hates Me",
              },
            ]}
          />
        </div>
        <div className="start-button-container">
          <button className="start-button button">Start New Adventure</button>
        </div>
      </div>
    </div>
  );
};
