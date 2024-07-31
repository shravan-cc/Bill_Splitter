import React from "react";
import styles from "./ButtonInput.module.css";
interface ButtonInputProps {
  value: string;
  type: "normal" | "custom";
}

export function ButtonInput({ value, type }: ButtonInputProps) {
  return (
    <div className={styles.container}>
      <button className={styles[type]}>{value}</button>
    </div>
  );
}
