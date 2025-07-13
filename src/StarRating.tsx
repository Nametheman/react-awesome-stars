import React, { useState, useCallback, useMemo } from "react";

export interface StarRatingProps {
  /** Current rating value (0-maxRating) */
  rating?: number;
  /** Maximum number of stars */
  maxRating?: number;
  /** Whether the rating is interactive */
  interactive?: boolean;
  /** Callback fired when rating changes */
  onRatingChange?: (rating: number) => void;
  /** Size of the stars */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  /** Color of filled stars */
  fillColor?: string;
  /** Color of empty stars */
  emptyColor?: string;
  /** Color of stars on hover */
  hoverColor?: string;
  /** Show half stars */
  allowHalf?: boolean;
  /** Show rating number next to stars */
  showRating?: boolean;
  /** Custom class name */
  className?: string;
  /** Whether to show tooltips on hover */
  showTooltip?: boolean;
  /** Custom tooltip labels */
  tooltipLabels?: string[];
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Disabled state */
  disabled?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  maxRating = 5,
  interactive = true,
  onRatingChange,
  size = "md",
  fillColor = "#fbbf24",
  emptyColor = "#d1d5db",
  hoverColor = "#f59e0b",
  allowHalf = false,
  showRating = false,
  className = "",
  showTooltip = false,
  tooltipLabels = ["Poor", "Fair", "Good", "Great", "Excellent"],
  animationDuration = 150,
  disabled = false,
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const starSize = useMemo(() => {
    if (typeof size === "number") return size;
    const sizes = {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 32,
      xl: 40,
    };
    return sizes[size];
  }, [size]);

  const handleMouseEnter = useCallback(
    (starIndex: number, isHalf: boolean = false) => {
      if (!interactive || disabled) return;
      const newRating = isHalf ? starIndex - 0.5 : starIndex;
      setHoverRating(newRating);
      setHoveredStar(starIndex);
    },
    [interactive, disabled]
  );

  const handleMouseLeave = useCallback(() => {
    if (!interactive || disabled) return;
    setHoverRating(null);
    setHoveredStar(null);
  }, [interactive, disabled]);

  const handleClick = useCallback(
    (starIndex: number, isHalf: boolean = false) => {
      if (!interactive || disabled) return;
      const newRating = isHalf ? starIndex - 0.5 : starIndex;
      onRatingChange?.(newRating);
    },
    [interactive, disabled, onRatingChange]
  );

  const currentRating = hoverRating !== null ? hoverRating : rating;

  const renderStar = (starIndex: number) => {
    const isHovered = hoveredStar === starIndex;
    const fillPercentage = Math.min(
      Math.max(currentRating - (starIndex - 1), 0),
      1
    );

    const starColor = isHovered
      ? hoverColor
      : fillPercentage > 0
      ? fillColor
      : emptyColor;

    return (
      <div
        key={starIndex}
        className={`relative inline-block cursor-pointer transition-all duration-${animationDuration} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${isHovered ? "scale-110" : ""}`}
        style={{
          width: starSize,
          height: starSize,
        }}
        onMouseEnter={() => handleMouseEnter(starIndex)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(starIndex)}
        title={showTooltip ? tooltipLabels[starIndex - 1] : undefined}
      >
        {allowHalf && interactive && (
          <>
            <div
              className="absolute top-0 left-0 w-1/2 h-full z-10 cursor-pointer"
              onMouseEnter={() => handleMouseEnter(starIndex, true)}
              onClick={(e) => {
                e.stopPropagation();
                handleClick(starIndex, true);
              }}
            />
            <div
              className="absolute top-0 right-0 w-1/2 h-full z-10 cursor-pointer"
              onMouseEnter={() => handleMouseEnter(starIndex, false)}
              onClick={(e) => {
                e.stopPropagation();
                handleClick(starIndex, false);
              }}
            />
          </>
        )}

        {/* Empty star background */}
        <svg
          width={starSize}
          height={starSize}
          viewBox="0 0 24 24"
          fill={emptyColor}
          className="absolute top-0 left-0"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>

        {/* Filled star overlay */}
        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{
            width: `${fillPercentage * 100}%`,
            transition: `width ${animationDuration}ms ease`,
          }}
        >
          <svg
            width={starSize}
            height={starSize}
            viewBox="0 0 24 24"
            fill={starColor}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxRating }, (_, i) => renderStar(i + 1))}
      </div>

      {showRating && (
        <span
          className="ml-2 text-sm font-medium text-gray-700"
          style={{ fontSize: Math.max(starSize * 0.5, 12) }}
        >
          {currentRating.toFixed(allowHalf ? 1 : 0)} / {maxRating}
        </span>
      )}
    </div>
  );
};

export default StarRating;
