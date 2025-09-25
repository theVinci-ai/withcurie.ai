"use client";

import React from "react";

interface CustomButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  width?: string;
}

export function CustomButton({
  children,
  backgroundColor = "#799B4B",
  textColor = "#FFFFFF",
  hoverBackgroundColor,
  hoverTextColor,
  icon,
  iconPosition = "right",
  onClick,
  className = "",
  type = "button",
  width = "224.06px",
  ...props
}: CustomButtonProps) {
  const hoverBg = hoverBackgroundColor || `${backgroundColor}E6`; // Add opacity for hover if not provided
  const hoverText = hoverTextColor || textColor; // Use original text color if no hover color provided

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center font-medium transition-all duration-300 ${className}`}
      style={{
        width: width,
        height: "40px",
        borderRadius: "10px",
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: "14px",
        lineHeight: "14px",
        paddingLeft: width === "auto" ? "24px" : "16px",
        paddingRight: width === "auto" ? "24px" : "16px",
        justifyContent: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverBg;
        e.currentTarget.style.color = hoverText;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = backgroundColor;
        e.currentTarget.style.color = textColor;
      }}
      {...props}
    >
      {iconPosition === "left" && icon && (
        <span className="flex items-center" style={{ marginRight: "6px" }}>
          {icon}
        </span>
      )}
      <span
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
      {iconPosition === "right" && icon && (
        <span className="flex items-center" style={{ marginLeft: "6px" }}>
          {icon}
        </span>
      )}
    </button>
  );
}
