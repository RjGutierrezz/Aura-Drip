import { useRef } from "react"
import type { AnimatedIconHandle } from "./icons/types"
import { useAuth } from "./auth/AuthProvider";

const ContentHeader = () => {
  const searchIconRef = useRef<AnimatedIconHandle | null> (null)
	// read the signed-in user from the global auth provider
	const { user } = useAuth();

  // grabs the first name from Supabase user metadata and if it does not exist
  // yet, fall back to the user's email.
  // if neither exists, use a generic label
	const displayName =
		typeof user?.user_metadata?.full_name === "string" &&
		user.user_metadata.full_name.trim().length > 0
			? user.user_metadata.full_name.trim().split(" ")[0]
			: (user?.email?.split("@")[0] ?? "there");

  return (
		<div
			className="profile-header"
			onMouseEnter={() => searchIconRef.current?.startAnimation()}
			onMouseLeave={() => searchIconRef.current?.stopAnimation()}
		>

			<div className="profile-container">
				<span className="profile-avatar" area-hidden="true"></span>
				<span className="profile-name">{displayName}</span>
			</div>
		</div>
	);
};

export default ContentHeader;
