import { useState } from "react";
import { wardrobeCategories } from "../constants";
import CategoryCard from "./CategoryCard";

const WardrobeCategories = () => {
	const [activeCategory, setActiveCategory] = useState("All");

	return (
		<section className="category-grid">
			{wardrobeCategories.map((category) => (
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

export default WardrobeCategories;
