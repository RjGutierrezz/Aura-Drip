import { sidebarLinks } from "../constants";

const Sidebar = () => {
	return (
		<aside className="sidebar">
			{/* title here */}
			<h2 className="nav-title">Aura Drip</h2>

			{/* TODO: need to add icons next to the texts */}
			<nav className="sidebar-nav">
				{sidebarLinks.map((link) => {
					const Icon = link.icon;

					return (
						<a key={link.name} href={link.href}>
							<Icon size={20} />
							{link.name}
						</a>
					);
				})}
			</nav>
		</aside>
	);
};

export default Sidebar;
