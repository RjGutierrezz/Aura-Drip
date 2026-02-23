import { sidebarLinks } from "../constants";
import type { AnimatedIconHandle } from "./icons/types"
import { useRef } from "react" 

const Sidebar = () => {

  const iconRefs = useRef<Record<string, AnimatedIconHandle | null>>({})
	return (
		<aside className="sidebar">
			{/* title here */}
			<h2 className="nav-title">Aura Drip</h2>

			{/* TODO: need to add icons next to the texts */}
			<nav className="sidebar-nav">
				{sidebarLinks.map((link) => {
					const Icon = link.icon;

					return (
						<a 
              key={link.name} 
              href={link.href} 
              onMouseEnter= {() => iconRefs.current[link.name]?.startAnimation()}
              onMouseLeave={() => iconRefs.current[link.name]?.stopAnimation()}
            >

							<Icon ref={(el) => {iconRefs.current[link.name] = el}} size={20} />
							{link.name}
						</a>
					);
				})}
			</nav>
		</aside>
	);
};

export default Sidebar;
