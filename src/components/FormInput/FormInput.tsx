/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./FormInput.module.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { BillTip } from "../BillTip/BillTip";

interface FormInputProps {
  bill: number;
  person: number;
  error: { billErrorMessage: string; personErrorMessage: string };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "SET_BILL_VALUE" | "SET_PERSON_VALUE"
  ) => void;
  setBtnValue: (selectedTip: number) => void;
  handleInputChangeInCustom: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  //customValue,
  handleInputChangeInCustom,
  //handleCustomClick,
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
        error={error.billErrorMessage}
        onChange={(e) => handleChange(e, "SET_BILL_VALUE")}
        value={bill}
      />
      <BillTip
        label="Select Tip %"
        values={["5%", "10%", "15%", "25%", "50%", "Custom"]}
        setBtnValue={setBtnValue}
        handleInputChangeInCustom={handleInputChangeInCustom}
        handleBlur={handleBlur}
        inputRef={inputRef}
        inputFocus={inputFocus}
        selectedTip={selectedTip}
      />
      <NumberInput
        label="Number of People"
        typeOfIcon="person"
        error={error.personErrorMessage}
        onChange={(e) => handleChange(e, "SET_PERSON_VALUE")}
        value={person}
      />
    </div>
  );
}
