/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./FormInput.module.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { BillTip } from "../BillTip/BillTip";

interface FormInputProps {
  value: { bill: number; person: number };
  error: {
    bill: {
      error: string;
      hasError: boolean;
    };
    person: {
      error: string;
      hasError: boolean;
    };
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "bill" | "person"
  ) => void;
  setBtnValue: (btnValue: number) => void;
  customValue: string;
  handleInputChangeInCustom: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCustomClick: () => void;
  handleBlur: () => void;
  inputRef: any;
  inputFocus: () => void;
  btnValue: number;
}

export function FormInput({
  value,
  error,
  handleChange,
  setBtnValue,
  customValue,
  handleInputChangeInCustom,
  handleCustomClick,
  handleBlur,
  inputRef,
  inputFocus,
  btnValue,
}: FormInputProps) {
  return (
    <div className={styles.container}>
      <NumberInput
        label="Bill"
        typeOfIcon="dollar"
        error={error.bill}
        onChange={(e) => handleChange(e, "bill")}
        value={value.bill}
      />
      <BillTip
        label="Select Tip %"
        values={["5%", "10%", "15%", "25%", "50%", "Custom"]}
        setBtnValue={setBtnValue}
        customValue={customValue}
        handleInputChangeInCustom={handleInputChangeInCustom}
        handleCustomClick={handleCustomClick}
        handleBlur={handleBlur}
        inputRef={inputRef}
        inputFocus={inputFocus}
        btnValue={btnValue}
      />
      <NumberInput
        label="Number of People"
        typeOfIcon="person"
        error={error.person}
        onChange={(e) => handleChange(e, "person")}
        value={value.person}
      />
    </div>
  );
}
