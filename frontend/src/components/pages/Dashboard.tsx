// TODO: weather API functionality


import WardrobeCategories from "../WardrobeCategories";
import WardrobeClothes from "../WardrobeClothes";
import SuggestionContent from "../SuggestionContent";
import DripInspiration from "../DripInspiration";
import ContentHeader from "../ContentHeader";

const Dashboard = () => {

	return (
		<>
      {/* not reall using dashboard-page here */}
			<div className="dashboard-page">
        <ContentHeader/>

        <div className="dashboard-greetings">
          {/* add getting / current weather / button to generate git */}
          <div className="greeting">
            {/* TODO: the greeting should change the name of who is signed in */}
            <h1 className="greeting-title">
              Good day, John
            </h1>
            <p className="greeting-text">Let's create the perfect fit for the day!</p>
          </div>  

          <div className="essential">
            <div className="weather-api">
              <p>Weather API</p>
            </div>
            <button className="outfit-button glass-panel">Generate Outfit</button>
          </div>
        </div>

        <div className="dashboard-main-content">
          {/* add wardrobe quick preview / todays suggestion */}
          <div className="wardrobe-container glass-panel">
            <div className="wardrobe-header">
              {/* Title and Sort option here */}
              <h3>My Wardrobe</h3>
              <select className="sort-wardrobe glass-panel" name="sort" id="sort">
                <option value="default">Sort</option>
                <option value="name-asc">(A-Z)</option>
                <option value="name-dec">(Z-A)</option>
              </select>
            </div>
            <div className="wardrobe-categories">
              {/* clothes categories here */}
              <WardrobeCategories/>
            </div>
            <div className="wardrobe-main-content">
              {/* clothes preview */}
              <WardrobeClothes/>
            </div>
          </div>
          <div className="suggestion-container glass-panel">
            <h3>Today's suggestion</h3>
            <SuggestionContent/>
          </div>
        </div>

        <div className="dashboard-footer">
          {/* pinterest fit inspo / style metric to show how much clothes they have */}
          {/* that are casual, formal, business */}
          <div className="drip-container glass-panel">
            <h3>Drip Inspiration</h3>
            <DripInspiration/>
          </div>
        </div>
			</div>
		</>
	);
};

export default Dashboard;
