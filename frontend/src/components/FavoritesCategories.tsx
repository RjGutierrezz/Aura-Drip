import { useState } from "react";
import { favoriteCategories } from "../constants";
import CategoryCard from "./CategoryCard";

const FavoritesCategories = () => {
	const [activeCategory, setActiveCategory] = useState("All");

	return (
		<section className="category-grid">
			{favoriteCategories.map((category) => (
				/*Card will be classified as business/casual/formal for sorting here*/
				<CategoryCard
					key={category.id}
					name={category.name}
					isActive={activeCategory === category.name}
					onClick={() => setActiveCategory(category.name)}
				/>
			))}
		</section>
	);
};

export default FavoritesCategories;
