import React from "react";
import { Link } from "react-router-dom";

type LeftArrowProps = {
  to: string;
  label?: string;
  className?: string;
};

export const LeftArrow = ({
  to,
  label = "Last",
  className = "",
}: LeftArrowProps) => {
  console.log("to", to);

  return (
    <>
      <Link
        to={to}
        className={`inline-flex items-center gap-2 ${className ?? ""}`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          className="shrink-0"
        >
          <path
            d="M16 5L8 12l8 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{label}</span>
      </Link>
    </>
  );
};
