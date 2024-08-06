import React from "react";
import styles from "./ButtonInput.module.css";
interface ButtonInputProps extends React.ComponentProps<"button"> {
  value: string;
  types: "normal" | "custom";
  btnValue: number;
}

export function ButtonInput({
  value,
  types,
  children,
  btnValue,
  ...buttonProps
}: ButtonInputProps) {
  return (
    <div className={styles.container}>
      <button
        value={value}
        className={`${styles[types]} ${btnValue === Number(value.slice(0, -1)) ? styles.active : ""}`}
        {...buttonProps}
      >
        {children || value}
      </button>
    </div>
  );
}
