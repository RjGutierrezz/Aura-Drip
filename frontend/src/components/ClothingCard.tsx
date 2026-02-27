type ClothingCardProps = {
  name: string;
  category: string;
  color: string;
}


const ClothingCard = ({ name, category, color}: ClothingCardProps) => {
  return (
    <div>
      <article className="clothing-card glass-panel">
        <div className="clothing-image-container" />
          <div className="clothing-body">
            {/* name needs to be here */}
            <h4>{name}</h4>
            {/* <p>{category}</p> */}
            {/* <span>{color}</span> */}
          </div>
      </article>
    </div>
  )
}

export default ClothingCard
