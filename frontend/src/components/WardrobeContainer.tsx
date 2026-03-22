import { useState } from "react"
import WardrobeCategories from "./WardrobeCategories";
import WardrobeClothes from "./WardrobeClothes";

type WardrobeContainerProps = {
	mode?: "compact" | "full";
};

const WardrobeContainer = ({ mode = "compact" }: WardrobeContainerProps) => {
	const [activeCategory, setActiveCategory] = useState("All")

  return (
		<div
			className={`wardrobe-container wardrobe-container--${mode} `}
		>
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
				{/* connects click event to parent state */}
        <WardrobeCategories 
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
			</div>
			<div className="wardrobe-main-content">
				{/* passing activeCategory into WardrobeClothes so the clothes component */}
				{/*     know the current filter */}
        <WardrobeClothes activeCategory={activeCategory}/>
			</div>
		</div>
	);
};

export default WardrobeContainer;
