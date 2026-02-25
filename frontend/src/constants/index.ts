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

export type Category = {
  id: string
  name: string
}

export const sidebarLinks: SidebarLinkType[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Dashboard,
  },
  {
    name: "Wardrobe",
    href: "/wardrobe",
    icon: Wardrobe,
  },
  {
    name: "Outfit",
    href: "/outfit",
    icon: Flame,
  },
  {
    name: "Favorite",
    href: "/favorite",
    icon: Favorite,
  },
]

export const wardrobeCategories: Category[] = [
  {id: "All", name : "All"},
  {id: "Tops", name : "Tops"},
  {id: "Bottoms", name : "Bottoms"},
  {id: "Shoes", name : "Shoes"},
  {id: "Outerwear", name : "Outerwear"},
]



