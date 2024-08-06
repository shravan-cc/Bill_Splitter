/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./FormInput.module.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { BillTip } from "../BillTip/BillTip";

interface FormInputProps {
  bill: number;
  person: number;
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
    field: "bill" | "person",
    type: "SET_BILL_VALUE" | "SET_PERSON_VALUE"
  ) => void;
  setBtnValue: (selectedTip: number) => void;
  customValue: string;
  handleInputChangeInCustom: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCustomClick: () => void;
  handleBlur: () => void;
  inputRef: any;
  inputFocus: () => void;
  selectedTip: number;
}

export function FormInput({
  bill,
  person,
  error,
  handleChange,
  setBtnValue,
  customValue,
  handleInputChangeInCustom,
  handleCustomClick,
  handleBlur,
  inputRef,
  inputFocus,
  selectedTip,
}: FormInputProps) {
  return (
    <div className={styles.container}>
      <NumberInput
        label="Bill"
        typeOfIcon="dollar"
        error={error.bill}
        onChange={(e) => handleChange(e, "bill", "SET_BILL_VALUE")}
        value={bill}
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
        selectedTip={selectedTip}
      />
      <NumberInput
        label="Number of People"
        typeOfIcon="person"
        error={error.person}
        onChange={(e) => handleChange(e, "person", "SET_PERSON_VALUE")}
        value={person}
      />
    </div>
  );
}
