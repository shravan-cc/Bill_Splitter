import React from "react";
import styles from "./ButtonInput.module.css";
interface ButtonInputProps extends React.ComponentProps<"button"> {
  value: string;
  types: "normal" | "custom";
  selectedTip: number;
}

export function ButtonInput({
  value,
  types,
  selectedTip,
  ...buttonProps
}: ButtonInputProps) {
  return (
    <div className="bg-white flex w-full">
      <button
        value={value}
        className={`${styles[types]} ${selectedTip === Number(value.slice(0, -1)) ? styles.active : ""}`}
        {...buttonProps}
      >
        {value}
      </button>
    </div>
  );
}
