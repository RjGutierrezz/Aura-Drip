import { useRef } from "react"
import type { AnimatedIconHandle } from "../components/icons/types"
import MagnifierIcon from "../components/icons/magnifier-icon"

const ContentHeader = () => {
  const searchIconRef = useRef<AnimatedIconHandle | null> (null)
  
  return (
		<div
			className="dashboard-header"
			onMouseEnter={() => searchIconRef.current?.startAnimation()}
			onMouseLeave={() => searchIconRef.current?.stopAnimation()}
		>
			{/* add search button and profile here */}
			<div className="search-container">
				<MagnifierIcon ref={searchIconRef} size={14} className="search-icon" />
				<input
					className="search"
					type="text"
					placeholder="Search your wardrobe.."
				/>
			</div>

			<div className="profile-container">
				<span className="profile-avatar" area-hidden="true"></span>
				<span className="profile-name">John Doe</span>
			</div>
		</div>
	);
};

export default ContentHeader;
