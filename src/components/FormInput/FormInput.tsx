import React, { useEffect, useState } from "react";
import styles from "./FormInput.module.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { BillTip } from "../BillTip/BillTip";

export function FormInput() {
  const [value, setValue] = useState<string>("");
  const [errorObj, setError] = useState<{ error: string; hasError: boolean }>({
    error: "",
    hasError: false,
  });
  const [changed, makeChange] = useState<boolean>(false);

  useEffect(() => {
    let hasError = false;
    let errorMessage = "";
    if (changed) {
      if (value === "") {
        errorMessage = "Value cannot be empty";
        hasError = true;
      } else if (isNaN(Number(value))) {
        errorMessage = "Please enter a number";
        hasError = true;
      } else if (Number(value) <= 0) {
        errorMessage = "Value must be greater than zero";
        hasError = true;
      }
    }

    setError({ error: errorMessage, hasError });
  }, [value]); // Only run when `value` changes

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    makeChange(true);
  };
  return (
    <div className={styles.container}>
      <NumberInput
        label="Bill"
        typeOfIcon="dollar"
        error={errorObj}
        onChange={handleInputChange}
        value={value}
        change={changed}
      />
      <BillTip
        label="Select Tip %"
        values={["5%", "10%", "15%", "25%", "50%", "Custom"]}
      />
      <NumberInput
        label="Number of People"
        typeOfIcon="person"
        error={errorObj}
        onChange={handleInputChange}
        value={value}
        change={changed}
      />
    </div>
  );
}
