import "../css/MainMenu.css";
import { MainMenuOptions } from "../layout/MainMenuOptions";
import { MainMenuTitle } from "../layout/MainMenuTitle";
import sword from "../assets/sword.png";
import mask from "../assets/mask.png";
import hat from "../assets/witch-hat.png";
import { useMenuSettingsStore } from "../state/MenuSettingsStore";

export const MainMenu = () => {
  const menuSettings = useMenuSettingsStore((state) => state.menuSettings);
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
            name={"genre"}
            id={0}
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
          <button
            onClick={() => console.log(menuSettings)}
            className="start-button button"
          >
            Start New Adventure
          </button>
        </div>
      </div>
    </div>
  );
};
