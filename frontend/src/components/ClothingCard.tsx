import HeartIcon from "./icons/heart-icon";




type ClothingCardProps = {
  id: string;
  name: string;
  category: string;
  color: string;
  isFavorited: boolean;
  onToggleFavorite: () => void;
}


const ClothingCard = ({isFavorited, onToggleFavorite}: ClothingCardProps) => {
  return (
    <div>
      <article className="clothing-card">
        <div className="clothing-image-container">
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
            {/* name needs to be here */}
            <h4></h4>
            {/* <p>{category}</p> */}
            {/* <span>{color}</span> */}
          </div>
      </article>
    </div>
  )
}

export default ClothingCard
