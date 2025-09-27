import React from "react";
import { Link } from "react-router-dom";

type RightArrowProps = {
  to: string;
  label?: string;
  className?: string;
};

export const RightArrow = ({
  to,
  label = "Next",
  className = "",
}: RightArrowProps) => {
  return (
    <>
      <Link
        to={to}
        className={`inline-flex items-center gap-2 ${className ?? ""}`}
      >
        <span>{label}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className="shrink-0"
        >
          <path
            d="M8 5l8 7-8 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </>
  );
};
