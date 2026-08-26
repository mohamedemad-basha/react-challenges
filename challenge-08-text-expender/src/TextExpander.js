import { useState } from "react";

export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  expanded = false,
  buttonColor = "#1f09cd",
  className,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const words = children.split(" ");

  const displayedText = isExpanded
    ? children
    : words.length > collapsedNumWords
      ? words.slice(0, collapsedNumWords).join(" ") + "..."
      : children;

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    color: buttonColor,
    marginLeft: "7px",
  };

  return (
    <div className={className}>
      <span>{displayedText}</span>

      <button
        style={buttonStyle}
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
