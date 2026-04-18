import { useEffect, useState } from "react";
import { getClothingItems } from "../api/clothing";
import { useAuth } from "./auth/AuthProvider";

type ContentHeaderProps = {
	itemCount: number;
	outfitCount: number;
	favoriteCount: number;
};

const ContentHeader = () => {
	const [itemCount, setItemCount] = useState(0);
	const [favoriteCount, setFavoriteCount] = useState(0);
	const outfitCount = 0;


	// read the signed-in user from the global auth provider
	const { user } = useAuth();

  // grabs the first name from Supabase user metadata and if it does not exist
  // yet, fall back to the user's email.
  // if neither exists, use a generic label
	const displayName =
		typeof user?.user_metadata?.full_name === "string" &&
		user.user_metadata.full_name.trim().length > 0
			? user.user_metadata.full_name.trim().split(" ")[0]
			: (user?.email?.split("@")[0] ?? "there");


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
				<span className="profile-name">{displayName}</span>
			</div>
		</div>
	);
};

export default ContentHeader;
