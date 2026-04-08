import { useState } from "react";

export const MainMenuOptions = ({
  options,
  extraInfoActive,
  extraInfo,
  name,
  updateMenuSettings,
  id,
}) => {
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(-1);
  const [selectedOption, setSelectedOption] = useState({
    settingId: id,
    settingTitle: name,
    settingSelected: -1,
    settingSelectedName: "",
  });

  const [activeOption, setActiveOption] = useState(-1);
  const onMouseEnter = (idx) => {
    if (selectedOptionIdx === -1) {
      setActiveOption(idx);
    }
  };
  const onClick = (option, idx) => {
    setSelectedOptionIdx(idx);
    setActiveOption(idx);
    setSelectedOption({
      settingId: id,
      settingTitle: name,
      settingSelected: idx,
      settingSelectedName: option.text,
    });
    updateMenuSettings(selectedOption);
  };

  return (
    <ul className="options">
      {options.map((option, idx) => (
        <li
          onClick={() => onClick(option, idx)}
          // onMouseEnter={() => onMouseEnter(idx)}
          key={idx}
          className="option"
        >
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
