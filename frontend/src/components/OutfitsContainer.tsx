{/* This is the side container inside outfits page */}
type OutfitsContainerProps = {
	mode?: "compact" | "full" | "half" | "quarter";
    children?: React.ReactNode;
};

{/* Children here allow for containers inside containers */}
const OutfitsContainer = ({ mode = "half", children }: OutfitsContainerProps) => {
	return (
		<div
			className={`outfit-container outfit-container--${mode} glass-panel`}
		>
			{children}
		</div>
	);
};

export default OutfitsContainer;