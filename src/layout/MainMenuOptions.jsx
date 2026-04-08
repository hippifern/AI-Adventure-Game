import { useState } from "react";

export const MainMenuOptions = ({
  options,
  extraInfoActive,
  extraInfo,
  name,
}) => {
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(-1);
  const [selectedOption, setSelectedOption] = useState({});

  const [activeOption, setActiveOption] = useState(-1);
  const onMouseEnter = (idx) => {
    if (selectedOptionIdx === -1) {
      setActiveOption(idx);
    }
  };
  const onClick = (idx) => {
    setSelectedOptionIdx(idx);
    setSelectedOption({
      name: name,
      options: options[idx],
    });
  };

  return (
    <ul className="options">
      {options.map((option, idx) => (
        <li
          onClick={() => onClick(idx)}
          onMouseEnter={() => onMouseEnter(idx)}
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
