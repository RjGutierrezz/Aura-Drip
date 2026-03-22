import { wardrobeCategories } from "../constants";
import CategoryCard from "./CategoryCard";

type WardrobeCategoriesProps = {
  activeCategory: string
  onSelectCategory: (category: string) => void
}


const WardrobeCategories = ({
  // padding WardrobeCategoriesProps into this component
  activeCategory, onSelectCategory,
}: WardrobeCategoriesProps) => {
	return (
		<section className="category-grid">
			{wardrobeCategories.map((category) => (
				<CategoryCard
					key={category.id}
					name={category.name}
					isActive={activeCategory === category.name}
					onClick={() => onSelectCategory(category.name)}
				/>
			))}
		</section>
	);
};

export default WardrobeCategories;
