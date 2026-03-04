export type AnimatedIconProps = {
  /** Icon size in pixels or CSS string */
  size?: number | string;
  /** Icon color (defaults to currentColor) */
  color?: string;
    /** SVG fill color (defaults to none) */
  fill?: string;
  /** SVG stroke width */
  strokeWidth?: number;
  /** Additional CSS classes */
  className?: string;
}

export type AnimatedIconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
}
