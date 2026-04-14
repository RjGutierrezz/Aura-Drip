import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClothingItems } from "../../api/clothing";
import AddClothingImage from "../AddClothingImage";
import AddClothingItem from "../AddClothingItem";
import { uploadClothingImage } from "../../lib/uploadClothingImage";

// The goal of this page is to submit an item and then redirect to wardrobe
const AddItemPage = () => {
	const navigate = useNavigate();

	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [imagePreviewUrl, setImagePreviewUrl] = useState("");

	const handleImageSelected = (file: File, previewUrl: string) => {
		setSelectedFile(file);
		setImagePreviewUrl(previewUrl);
	};

	const handleCreate = async (input: {
		name: string;
		category: string;
		color: string;
		style: string;
		occasion: string;
		warmth: string;
	}) => {
		if (!selectedFile) {
			alert("Please select an image first");
			return;
		}

    const uploadedImageUrl = await uploadClothingImage(selectedFile)

		// sends POST to backend
		await createClothingItems({ ...input, imageUrl: uploadedImageUrl });

		// redirect to wardrobe page
		navigate("/wardrobe");
	};

	return (
		<div className="add-item-page">
			<AddClothingImage
				onImageSelected={handleImageSelected}
				imageUrl={imagePreviewUrl}
			/>
			<AddClothingItem onSubmit={handleCreate} />
		</div>
	);
};

export default AddItemPage;
