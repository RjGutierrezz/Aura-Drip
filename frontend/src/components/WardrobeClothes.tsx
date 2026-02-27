import ClothingCard from "./ClothingCard"
import { wardrobeClothesPlaceholder } from "../constants"

const WardrobeClothes = () => {
  return (
    <section className="clothing-grid">
      {wardrobeClothesPlaceholder.map((clothes) => (
        <ClothingCard 
          key={clothes.id}
          name={clothes.name}
          category={clothes.category}
          color={clothes.color}
        />
      ))}
    </section>
  )
}

export default WardrobeClothes
