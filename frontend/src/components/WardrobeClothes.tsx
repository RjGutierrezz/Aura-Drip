import ClothingCard from "./ClothingCard";

// dont need this anymore
// import { wardrobeClothesPlaceholder } from "../constants"

import { useEffect, useState } from "react";
import {
	type ClothingItems,
	deleteClothingItem,
	getClothingItems,
	updateClothingItem,
} from "../api/clothing";
import { itemColorPalette } from "../constants";

type WardrobeClothesProps = {
	activeCategory: string;
};

const WardrobeClothes = ({ activeCategory }: WardrobeClothesProps) => {
	const [favoritedById, setFavoritedById] = useState<Record<string, boolean>>(
		{},
	);

	const toggleFavorite = (id: string) => {
		setFavoritedById((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	// starts an empty array
	const [items, setItems] = useState<ClothingItems[]>([]);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const [editingId, setEditingId] = useState<string | null>(null);
	const [editName, setEditName] = useState("");
	const [editCategory, setEditCategory] = useState("Tops");
	const [editColor, setEditColor] = useState(itemColorPalette[0]);

	useEffect(() => {
		// To use async inside useEffect you have to do the ff
		const run = async () => {
			try {
				// check to see if the data is there
				const data = await getClothingItems();

				// re-render the array to add the data to the array
				setItems(data);
			} catch (err) {
				setError("Could not load the wardrobe items.");
			} finally {
				setLoading(false);
			}
		};

		run();
	}, []);

	// checking error cases
	if (loading) {
		return <p>Loading wardobe...</p>;
	} else if (error) {
		return <p>{error}</p>;
	} else if (items.length === 0) {
		return <p>There are no clothes yet 😓. Start uploading!</p>;
	}

	const filteredItems =
		activeCategory === "All"
			? items
			: items.filter((item) => item.category === activeCategory);

	// delete handler
	const handleDelete = async (id: string) => {
		try {
			await deleteClothingItem(id);

			// leave the id's that we are not trying to delete
			setItems((prev) => prev.filter((item) => item.id !== id));
		} catch (error) {
			setError("Could not delete the item.");
		}
	};

	const startEdit = (item: ClothingItems) => {
		setEditingId(item.id);
		setEditName(item.name);
		setEditCategory(item.category);
		setEditColor(item.color);
	};

	const cancelEdit = () => {
		setEditingId(null);
		setEditName("");
		setEditCategory("Tops");
		setEditColor(itemColorPalette[0]);
	};

	const saveEdit = async () => {
		if (!editingId) return;
		try {
			const updated = await updateClothingItem(editingId, {
				name: editName,
				category: editCategory,
				color: editColor,
			});

			setItems((prev) =>
				prev.map((item) => (item.id === editingId ? updated : item)),
			);
			cancelEdit();
		} catch (error) {
			setError("Could not update item.");
		}
	};

	return (
		<section className="clothing-grid">
			{/* to loop through each (filtered) items and re-render each card */}
			{filteredItems.map((clothes) => (
				<div key={clothes.id}>
					<ClothingCard
						key={clothes.id}
						name={clothes.name}
						category={clothes.category}
						color={clothes.color}
						isFavorited={!!favoritedById[clothes.id]}
						onToggleFavorite={() => toggleFavorite(clothes.id)}
						onDelete={() => handleDelete(clothes.id)}
						onEdit={() => startEdit(clothes)}
					/>
				</div>
			))}
			{editingId && (
				<div className="edit-backdrop" onClick={cancelEdit}>
					<div className="edit-panel" onClick={(e) => e.stopPropagation()}>
						<div className="edit-panel-header">
							<h3>Edit Item</h3>
							<button className="edit-close-btn" onClick={cancelEdit}>
								✕
							</button>
						</div>

						<div className="edit-panel-body">
							<div className="edit-field-group">
								<label className="edit-label">Name</label>
								<input
									className="edit-input"
									value={editName}
									onChange={(e) => setEditName(e.target.value)}
									placeholder="e.g. Denim Pants"
								/>
							</div>

							<div className="edit-field-group">
								<label className="edit-label">Category</label>
								<select
									className="edit-input edit-select"
									value={editCategory}
									onChange={(e) => setEditCategory(e.target.value)}
								>
									<option>Tops</option>
									<option>Bottoms</option>
									<option>Shoes</option>
									<option>Outerwear</option>
								</select>
							</div>

							<div className="edit-field-group">
								<label className="edit-label">Color</label>
								<div className="color-palette" role="radiogroup" aria-label="Edit item color">
									{itemColorPalette.map((swatch) => (
										<button
											key={swatch}
											type="button"
											className={editColor === swatch ? "color-swatch active" : "color-swatch"}
											style={{ backgroundColor: swatch }}
											onClick={() => setEditColor(swatch)}
											aria-label={`Select color ${swatch}`}
										/>
									))}
								</div>
							</div>
						</div>

						<div className="edit-panel-actions">
							<button className="edit-btn-save" onClick={saveEdit}>Save Changes</button>
							<button className="edit-btn-cancel" onClick={cancelEdit}>Cancel</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default WardrobeClothes;
