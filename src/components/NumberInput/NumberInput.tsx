/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import styles from "./NumberInput.module.css";
import { faDollar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NumberInputProps extends React.ComponentProps<"input"> {
  label: string;
  typeOfIcon: "person" | "dollar";
  error?: string;
} // Define your props here } export function
export function NumberInput({
  label,
  typeOfIcon,
  error,
  ...inputProps
}: NumberInputProps) {
  const [value, setValue] = useState<string>("");
  const [changed, makeChange] = useState<boolean>(false);

  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setValue(newValue);
    makeChange(true);
  };

  let hasError = false;
  if (changed) {
    if (value === "") {
      error = "Value cannot be empty";
      hasError = true;
    } else if (isNaN(Number(value))) {
      error = "Please enter a number";
      hasError = true;
    } else if (Number(value) <= 0) {
      error = "Value must be greater than zero";
      hasError = true;
    }
  }
  return (
    <div className={styles.container}>
      <label htmlFor="number-input" className={styles.labelName}>
        {label}
      </label>
      <div
        className={`${styles.inputWrapper} ${hasError ? styles.errorInput : ""} `}
      >
        {typeOfIcon === "dollar" ? (
          <FontAwesomeIcon icon={faDollar} className={styles.icon} />
        ) : (
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
        )}
        <input
          type="text"
          id="number-input"
          className={styles.numberInput}
          value={value}
          onChange={handleInputChange}
          {...inputProps}
        />
      </div>
      <span className={styles.error}>{error}</span>
    </div>
  );
}
