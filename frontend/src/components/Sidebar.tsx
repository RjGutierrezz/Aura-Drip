import { sidebarLinks } from "../constants";

const Sidebar = () => {
	return (
		<aside className="sidebar">
			{/* title here */}
			<h2>Aura Drip</h2>
			

      {/* TODO: need to add icons next to the texts */}
      <nav className="sidebar-nav">
      { sidebarLinks.map((link) => (
        <a key={link.name} href={link.href}>
          {link.name}
        </a>
      ))}
      </nav>
		</aside>
	);
};

export default Sidebar;
