import Dashboard from "../components/icons/layout-dashboard-icon"
import Wardrobe from "../components/icons/library-icon"
import Flame from "../components/icons/flame-icon"
import Favorite from "../components/icons/heart-icon"

import type { ComponentType } from "react";

export type SidebarLinkType = {
  name: string
  href: string
  icon: ComponentType<{ size?: number; className?: string}>
}

export const sidebarLinks: SidebarLinkType[] = [
  {
    name: "Dashboard",
    href: "#",
    icon: Dashboard,
  },
  {
    name: "Wardrobe",
    href: "#",
    icon: Wardrobe,
  },
  {
    name: "Outfit",
    href: "#",
    icon: Flame,
  },
  {
    name: "Favorite",
    href: "#",
    icon: Favorite,
  },

]
