/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./BillTip.module.css";
import { ButtonInput } from "../ButtonInput/ButtonInput";
interface BillTipProps {
  label: string;
  values: string[];
  setBtnValue: (selectedTip: number) => void;
  customValue: string;
  handleInputChangeInCustom: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCustomClick: () => void;
  handleBlur: () => void;
  inputRef: any;
  inputFocus: () => void;
  selectedTip: number;
}

export function BillTip({
  label,
  values,
  setBtnValue,
  customValue,
  handleInputChangeInCustom,
  handleCustomClick,
  handleBlur,
  inputRef,
  inputFocus,
  selectedTip,
}: BillTipProps) {
  return (
    <div className={styles.billContainer}>
      <label className={styles.labelName}>{label}</label>
      <div className={styles.buttonContainer}>
        {values.map((value) =>
          value === "Custom" ? (
            <ButtonInput
              value={value}
              types="custom"
              key={value}
              onClick={inputFocus}
              selectedTip={selectedTip}
            >
              <input
                ref={inputRef}
                type="text"
                className={styles.inputContainer}
                value={customValue}
                aria-label="Custom tip percentage"
                onClick={handleCustomClick}
                onChange={handleInputChangeInCustom}
                onBlur={handleBlur}
              />
            </ButtonInput>
          ) : (
            <ButtonInput
              value={value}
              types="normal"
              onClick={() => {
                setBtnValue(Number(value.slice(0, -1)));
                //setActiveButton(value);
              }}
              selectedTip={selectedTip}
            />
          )
        )}
      </div>
    </div>
  );
}
