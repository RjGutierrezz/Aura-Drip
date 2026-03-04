import { useState } from "react";
import OutfitsCard from "./OutfitsCard";
import { favoriteClothesPlaceholder } from "../constants";

const WardrobeClothes = () => {
  const [favoritedById, setFavoritedById] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavoritedById((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="clothing-grid">
      {favoriteClothesPlaceholder.map((clothes) => (
        <OutfitsCard
          key={clothes.id}
          id={clothes.id}
          category={clothes.category}
          color=""
          
          isFavorited={!!favoritedById[clothes.id]}
          onToggleFavorite={() => toggleFavorite(clothes.id)}
        />
      ))}
    </section>
  );
};

export default WardrobeClothes;