type InspirationCardProps = {
  name: string
  vibe: string
}

// not sure if its even worth adding the name of the image
const InspirationCard = ({name, vibe}: InspirationCardProps) => {
  return (
    <div>
      <article className="inspo-card glass-panel">
        <div className="inspo-image-container">
          {/* image from the api here */}
        </div>
      </article>
    </div>
  )
}

export default InspirationCard
