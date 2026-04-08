import { useState } from "react";
import { useMenuSettingsStore } from "../state/MenuSettingsStore";

export const MainMenuOptions = ({
  options,
  extraInfoActive,
  extraInfo,
  name,
  id,
}) => {
  const updateMenuSettings = useMenuSettingsStore(
    (state) => state.updateMenuSettings,
  );
  const [activeOption, setActiveOption] = useState(-1);
  const onClick = (option, idx) => {
    setActiveOption(idx);
    updateMenuSettings({
      settingId: id,
      settingTitle: name,
      settingSelected: idx,
      settingSelectedName: option.text,
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
                <h4>{extraInfo[0]}</h4>
                <h4>{extraInfo[1]}</h4>
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
