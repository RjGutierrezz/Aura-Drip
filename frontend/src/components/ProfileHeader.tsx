import { useRef } from "react"
import type { AnimatedIconHandle } from "./icons/types"


const ContentHeader = () => {
  const searchIconRef = useRef<AnimatedIconHandle | null> (null)

  return (
		<div
			className="profile-header"
			onMouseEnter={() => searchIconRef.current?.startAnimation()}
			onMouseLeave={() => searchIconRef.current?.stopAnimation()}
		>

			<div className="profile-container">
				<span className="profile-avatar" area-hidden="true"></span>
				<span className="profile-name">John Doe</span>
			</div>
		</div>
	);
};

export default ContentHeader;
