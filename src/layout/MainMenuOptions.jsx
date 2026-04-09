import { useState } from "react";
import { useMenuSettingsStore } from "../state/MenuSettingsStore";
import useSound from "use-sound";
import clickSfx from "../assets/click-sound.mp3";

export const MainMenuOptions = ({ options, extraInfoActive, name, id }) => {
  const updateMenuSettings = useMenuSettingsStore(
    (state) => state.updateMenuSettings,
  );
  const [activeOption, setActiveOption] = useState(-1);
  const [play] = useSound(clickSfx);

  const onClick = (option, idx) => {
    play();
    setActiveOption(idx);
    updateMenuSettings({
      settingId: id,
      settingTitle: name,
      settingSelected: idx,
      settingSelectedName: option.text,
      settingSelectedDescription: option.description,
    });
  };

  return (
    <ul className="options">
      {options.map((option, idx) => (
        <li onClick={() => onClick(option, idx)} key={idx} className="option">
          {activeOption === idx ? (
            <img className="icon" src={option.icon} alt="" />
          ) : (
            <></>
          )}
          <div className="option-info">
            <h3>{option.text}</h3>
            {extraInfoActive ? (
              <>
                <h4>{option.date}</h4>
                <h4>{option.played}</h4>
              </>
            ) : (
              <></>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
