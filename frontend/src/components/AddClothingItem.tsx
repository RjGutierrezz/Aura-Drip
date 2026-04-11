import { useState } from "react";
import { itemColorPalette } from "../constants";

type AddClothingItemInput = {
  name: string
  category: string
  color: string
  style: string
  occasion: string
  warmth: string
}


type Props = {
	onSubmit: (input: AddClothingItemInput) => Promise<void>;
};

export default function AddClothingItem({ onSubmit }: Props) {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("Tops");
	const [color, setColor] = useState(itemColorPalette[0]);
	const [submitting, setSubmitting] = useState(false);
  const [style, setStyle] = useState("")
  const [occasion, setOccasion] = useState("")
  const [warmth, setWarmth] = useState("")


	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitting(true);
		try {
			await onSubmit({ name, category, color, style, occasion, warmth });
			setName("");
			setCategory("Tops");
			setColor(itemColorPalette[0]);
      setStyle("");
      setOccasion("");
      setWarmth("");
		} finally {
			setSubmitting(false);
		}
	};


  // TODO: Needs success notification if the POST went through
  // TODO: Needs an image insertion placeholder
  return (
		<form onSubmit={handleSubmit} className="add-clothing-form glass-panel">
      <h3>Item Name</h3>
			<input
        className="form-content"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Navy Blue Polo"
				required
			/>

      <h3>Category</h3>
			<select className="form-content" value={category} onChange={(e) => setCategory(e.target.value)}>
				<option>Tops</option>
				<option>Bottoms</option>
				<option>Shoes</option>
				<option>Outerwear</option>
			</select>

      <h3>Style</h3>
      <select
        className="form-content"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        required
      >
        <option value="" disabled>Select style</option>
        <option value="Casual">Casual</option>
        <option value="Formal">Formal</option>
        <option value="Business">Business</option>
        <option value="Streetwear">Streetwear</option>
        <option value="Minimal">Minimal</option>
      </select>

      <h3>Occasion</h3>
      <select
        className="form-content"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="" disabled>Select occasion</option>
        <option value="Work">Work</option>
        <option value="Weekend">Weekend</option>
        <option value="Date">Date</option>
        <option value="Travel">Travel</option>
        <option value="Event">Event</option>
      </select>

      <h3>Warmth</h3>
      <select 
        className="form-content"
        value={warmth}
        onChange={(e) => setWarmth(e.target.value)}
        required
      >
        <option value="" disabled>Select warmth</option>
        <option value="Light">Light</option>
        <option value="Medium">Medium</option>
        <option value="Heavy">Heavy</option>
      </select>

      {/* added color pallete for better color visualization */}
      <h3>Item Color</h3>
      <div className="color-palette" role="radiogroup" aria-label="Item color">
        {itemColorPalette.map((swatch) => (
          <button
            key={swatch}
            type="button"
            className={color === swatch ? "color-swatch active" : "color-swatch"}
            style={{ backgroundColor: swatch }}
            onClick={() => setColor(swatch)}
            aria-label={`Select color ${swatch}`}
          />
        ))}
      </div>

      <div className="add-item-button-container">
      <button className="add-item-button glass-panel" type="submit" disabled={submitting}>
        {submitting ? "Adding..." : "Add"}
      </button>
      </div>
		</form>
	);
}
