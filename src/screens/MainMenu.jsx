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
                text: "Fantasy Land",
                icon: arrow,
                description:
                  "A high fantasy land of orcs, goblins, kings, queens and dragons. It is filled with castles, evil wizards, and all the tropes of high fantasy.",
              },
              {
                text: "Dungeon Delve",
                icon: arrow,
                description:
                  "A deep dark dungeon filled with living skeletons and every type of undead creature you can imagine.",
              },
              {
                text: "Horror World",
                icon: arrow,
                description:
                  "The medeival world you inhabit has been overrun by demons, and every kind of dark creature you can imagine. Can you find the source and beat them back?",
              },
              {
                text: "Post-Apocalypse",
                icon: arrow,
                description:
                  "The beautiful green land around you has been destroyed and all thats left is a ruined wasteland of moutains, deserts and roaming bands of warlords and raiders",
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
                description:
                  "You live in the shadows, preferring a quick dagger in the back over a face to face fight.",
              },
              {
                text: "Fighter",
                icon: sword,
                description:
                  "You're an honourable and upright fighter, with your sword at your side you seek justice in the world, and a good scrap.",
              },
              {
                text: "Healer",
                icon: hat,
                description:
                  "Making the world a better place is your goal, to heal and make all those around you healthy and better off for meeting you.",
              },
              {
                text: "Magician",
                icon: hat,
                description:
                  "The hidden world of fire, wind, earth, and more is your plaything. Turning the elements into magic spells.",
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
                description:
                  "You enjoy a good story, rather than fighting for your life.",
              },
              {
                text: "Tricky",
                icon: arrow,
                description:
                  "You want a good mix of tricky issues and scrappy fights as well as a good story.",
              },
              {
                text: "Brutal",
                icon: arrow,
                description:
                  "You're here to get into the stickiest, scariest situations out there.",
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
