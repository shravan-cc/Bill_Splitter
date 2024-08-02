import React, { useEffect, useState } from "react";
import styles from "./FormInput.module.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { BillTip } from "../BillTip/BillTip";

export function FormInput() {
  const [value, setValue] = useState<{ bill: string; person: string }>({
    bill: "",
    person: "",
  });
  const [errorObj, setError] = useState<{
    bill: { error: string; hasError: boolean };
    person: { error: string; hasError: boolean };
  }>({
    bill: { error: "", hasError: false },
    person: { error: "", hasError: false },
  });
  const [changed, makeChange] = useState<{ bill: boolean; person: boolean }>({
    bill: false,
    person: false,
  });

  useEffect(() => {
    const validateInput = (field: "bill" | "person", value: string) => {
      let hasError = false;
      let errorMessage = "";
      if (changed[field]) {
        if (field === "person") {
          if (!Number.isInteger(value)) {
            errorMessage = "Please enter valid number of people";
            hasError = true;
          }
        }
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
      setError((prev) => ({
        ...prev,
        [field]: { error: errorMessage, hasError },
      }));
    };

    validateInput("bill", value.bill);
    validateInput("person", value.person);
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "bill" | "person"
  ) => {
    const newValue = e.target.value;
    if (newValue === "") {
      setValue((prev) => ({
        ...prev,
        [field]: newValue,
      }));
    } else {
      setValue((prev) => ({
        ...prev,
        [field]: Number(newValue),
      }));
    }

    makeChange((prev) => ({
      ...prev,
      [field]: true,
    }));
  };
  return (
    <div className={styles.container}>
      <NumberInput
        label="Bill"
        typeOfIcon="dollar"
        error={errorObj.bill}
        onChange={(e) => handleInputChange(e, "bill")}
        value={value.bill}
      />
      <BillTip
        label="Select Tip %"
        values={["5%", "10%", "15%", "25%", "50%", "Custom"]}
      />
      <NumberInput
        label="Number of People"
        typeOfIcon="person"
        error={errorObj.person}
        onChange={(e) => handleInputChange(e, "person")}
        value={value.person}
      />
    </div>
  );
}
