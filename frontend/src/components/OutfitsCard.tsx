import HeartIcon from "./icons/heart-icon";



type OutfitsCardProps = {
  id: string;
  category: string;
  color: string;
  isFavorited: boolean;
  onToggleFavorite: () => void;
}


const ClothingCard = ({isFavorited, onToggleFavorite}: OutfitsCardProps) => {

  return (
     
      <div className="clothing-card">
        <div className="clothing-image-container" >
        <button
          type="button"
          className="favorite-btn"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
    >
      <HeartIcon 
      size={20}
      fill={isFavorited ? "#ff4d6d" : "none"}
      
      />
    </button>
  </div>
          <div className="clothing-body">
            
            { /*<p>{category}</p>*/ }
            {/* <span>{color}</span> */}
          </div>
      </div>

  )
}

export default ClothingCard
