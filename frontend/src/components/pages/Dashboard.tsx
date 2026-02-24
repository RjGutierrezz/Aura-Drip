// TODO: weather API functionality


import MagnifierIcon from "../icons/magnifier-icon"
import type { AnimatedIconHandle } from "../icons/types"
import { useRef } from "react" 

const Dashboard = () => {
  const searchIconRef = useRef<AnimatedIconHandle | null> (null)

	return (
		<>
      {/* not reall using dashboard-page here */}
			<div className="dashboard-page">
				<div 
          className="dashboard-header"
          onMouseEnter= {() => searchIconRef.current?.startAnimation()}
          onMouseLeave={() => searchIconRef.current?.stopAnimation()}
        >
          {/* add search button and profile here */}
          <div className="search-container">
            <MagnifierIcon ref={searchIconRef} size={14} className="search-icon" />
            <input className="search" type="text" placeholder="Search your wardrobe.." />
          </div>

          <div className="profile-container">
            <span className="profile-avatar" area-hidden="true"></span>
            <span className="profile-name">John Doe</span>
          </div>
        </div>


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
        </div>

        <div className="dashboard-footer">
          {/* pinterest fit inspo / style metric to show how much clothes they have */}
          {/* that are casual, formal, business */}
          
        </div>
			</div>
		</>
	);
};

export default Dashboard;
