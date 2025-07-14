import React, { useState, useCallback, useMemo } from "react";
import "./StarRating.css";

export interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  fillColor?: string;
  emptyColor?: string;
  hoverColor?: string;
  allowHalf?: boolean;
  showRating?: boolean;
  className?: string;
  showTooltip?: boolean;
  tooltipLabels?: string[];
  animationDuration?: number;
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
    const sizes = { xs: 16, sm: 20, md: 24, lg: 32, xl: 40 };
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
        className={`star-rating-star${
          disabled ? " star-rating-star-disabled" : ""
        }${isHovered ? " star-rating-star-hovered" : ""}`}
        style={{
          width: starSize,
          height: starSize,
          transition: `transform ${animationDuration}ms`,
        }}
        onMouseEnter={() => handleMouseEnter(starIndex)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(starIndex)}
        title={showTooltip ? tooltipLabels[starIndex - 1] : undefined}
        tabIndex={interactive && !disabled ? 0 : -1}
        role={interactive ? "button" : undefined}
        aria-label={
          showTooltip ? tooltipLabels[starIndex - 1] : `Rate ${starIndex}`
        }
      >
        {allowHalf && interactive && (
          <>
            <div
              className="star-rating-half left"
              onMouseEnter={() => handleMouseEnter(starIndex, true)}
              onClick={(e) => {
                e.stopPropagation();
                handleClick(starIndex, true);
              }}
            />
            <div
              className="star-rating-half right"
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
          className="star-rating-svg star-rating-empty"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        {/* Filled star overlay */}
        <div
          className="star-rating-fill"
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
            className="star-rating-svg star-rating-filled"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className={`star-rating-root${className ? ` ${className}` : ""}`}>
      <div className="star-rating-stars">
        {Array.from({ length: maxRating }, (_, i) => renderStar(i + 1))}
      </div>
      {showRating && (
        <span
          className="star-rating-value"
          style={{ fontSize: Math.max(starSize * 0.5, 12) }}
        >
          {currentRating.toFixed(allowHalf ? 1 : 0)} / {maxRating}
        </span>
      )}
    </div>
  );
};

export default StarRating;
