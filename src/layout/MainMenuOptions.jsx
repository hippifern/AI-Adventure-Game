export const MainMenuOptions = (props) => {
  const options = props.options;
  const extraInfoActive = props.extraInfoActive;
  const extraInfo = props.extraInfo;
  return (
    <ul className="options">
      {options.map((option) => (
        <li className="option">
          <img className="icon" src={option.icon} alt="" />
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
