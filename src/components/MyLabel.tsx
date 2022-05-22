import React from "react";
import "./mylabel.css";

export interface MyLabelProps {
  /**
   * The label to show
   */
  label: string;
  /**
   * What size do you want to use
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalize text for label
   */
  allCaps: boolean;
  /**
   * Color for text
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * Personalized font color
   */
  fontColor?: string;
  /**
   * Personalized font color
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  backgroundColor = 'transparent',
  color = "primary",
  fontColor,
  label = "No Label",
  size = "normal",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size}  text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label.toLowerCase()}
    </span>
  );
};
