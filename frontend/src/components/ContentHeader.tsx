import { useEffect, useState } from "react";
import { getClothingItems } from "../api/clothing";

type ContentHeaderProps = {
	itemCount: number;
	outfitCount: number;
	favoriteCount: number;
};

const ContentHeader = () => {
	const [itemCount, setItemCount] = useState(0);
	const [favoriteCount, setFavoriteCount] = useState(0);
	const outfitCount = 0;

	useEffect(() => {
		const loadCounts = async () => {
			try {
				const items = await getClothingItems();
				setItemCount(items.length);
				setFavoriteCount(items.filter((item) => item.isFavorite).length);
			} catch (error) {
				console.error("Failed to load header counts", error);
			}
		};

		loadCounts();
	}, []);

	return (
		<div className="dashboard-header">
			{/* add search button and profile here */}
			<div className="count-container">
				<div className="count-card glass-panel">
          <h3>{itemCount}</h3>
					<p>ITEMS</p>
				</div>

				<div className="count-card glass-panel">
					<h3>{outfitCount}</h3>
          <p>OUTFITS</p>
				</div>
				<div className="count-card glass-panel">
					<h3>{favoriteCount}</h3>
          <p>FAVORITES</p>
				</div>
			</div>

			<div className="profile-container">
				<span className="profile-avatar" area-hidden="true"></span>
				<span className="profile-name">John Doe</span>
			</div>
		</div>
	);
};

export default ContentHeader;
