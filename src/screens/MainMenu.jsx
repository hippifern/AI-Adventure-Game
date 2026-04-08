import "../css/MainMenu.css";

export const MainMenu = () => {
  return (
    <div className="screen-container">
      <div className="left-column">
        <div className="left-upper"></div>
        <div className="left-lower">
          <div className="load-game-container">
            <div className="load-game-title">
              <h2>Load Saved Game</h2>
              <div className="line"></div>
            </div>
            <div className="saved-options">
              <div className="option">
                <img src="" alt="" />
                <div className="option-info">
                  <h3>NAME OF ADVENTURE SAVED</h3>
                  <p>DATE SAVED</p>
                  <p>LAST PLAYED</p>
                </div>
                <div className="line"></div>
              </div>
              <div className="option">
                <img src="" alt="" />
                <div className="option-info">
                  <h3>NAME OF ADVENTURE SAVED</h3>
                  <p>DATE SAVED</p>
                  <p>LAST PLAYED</p>
                </div>
                <div className="line"></div>
              </div>
              <div className="option">
                <img src="" alt="" />
                <div className="option-info">
                  <h3>NAME OF ADVENTURE SAVED</h3>
                  <p>DATE SAVED</p>
                  <p>LAST PLAYED</p>
                </div>
                <div className="line"></div>
              </div>
            </div>
            <div className="load-button-container">
              <button className="load-button button">Load Adventure</button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-column">
        <div className="title-right"></div>
        <div className="genre-right"></div>
        <div className="class-right"></div>
        <div className="crazy-ai-right"></div>
      </div>
    </div>
  );
};
