import FavoritesCategories from "./FavoritesCategories";
import FavoriteOutfits from "./FavoriteOutfits";


type FavoritesContainerProps = {
	mode?: "compact" | "full";
};

const FavoritesContainer = ({ mode = "compact" }: FavoritesContainerProps) => {
	return (
		<div
			className={`favorites-container favorites-container--${mode} glass-panel`}
		>
			<div className="favorites-header">
				{/* Title and Sort option here */}
				<h3>Favorites</h3>
				<select className="sort-favorites glass-panel" name="sort" id="sort">
					<option value="default">Sort</option>
					<option value="name-asc">(Oldest)</option>
					<option value="name-dec">(Recent)</option>
				</select>
			</div>
			<div className="favorites-categories">
				{/* clothes categories here */}
				<FavoritesCategories />
			</div>
			<div className="wardrobe-main-content">
				{/* clothes preview */}
				<FavoriteOutfits />
			</div>
		</div>
	);
};

export default FavoritesContainer;