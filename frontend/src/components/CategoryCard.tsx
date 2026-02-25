type CategoryCardProps = {
	name: string;
	isActive: boolean;
	onClick: () => void;
};

const CategoryCard = ({ name, isActive, onClick }: CategoryCardProps) => {
	return (
		<div>
			<article className="category-card">
				<button
					type="button"
					className={isActive ? "category-btn active glass-panel" : "category-btn glass-panel"}
          onClick={onClick}
				>
					{name}
				</button>
			</article>
		</div>
	);
};

export default CategoryCard;
