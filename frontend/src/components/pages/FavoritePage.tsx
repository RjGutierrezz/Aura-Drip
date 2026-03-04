import ProfileHeader from '../ProfileHeader';
import FavoritesContainer from '../FavoritesContainer';
  const Dashboard = () => {

	return (
		<>
      {/* not reall using dashboard-page here */}
			<div className="dashboard-page">
        <ProfileHeader/>

        <div className="favorites-page-body">
					<FavoritesContainer mode="full" />
				</div>
	</div>
  

     
    </>
  );
};

export default Dashboard;