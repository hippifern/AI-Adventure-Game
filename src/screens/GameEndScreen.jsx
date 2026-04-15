import "../css/BootScreen.css";
export const GameScreenEnd = ({ setActiveScreen }) => {
  const onClickBootButton = () => {
    setActiveScreen(1);
  };

  return (
    <div className="screen-container">
      <h2 className="loading-text">Game Over!</h2>
      <button onClick={onClickBootButton}>Boot the New Adventure</button>
    </div>
  );
};
