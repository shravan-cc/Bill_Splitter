/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "./BillTip.module.css";
import { ButtonInput } from "../ButtonInput/ButtonInput";
interface BillTipProps {
  label: string;
  values: string[];
  setBtnValue: (selectedTip: number) => void;
  //customValue: string;
  handleInputChangeInCustom: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: any;
  selectedTip: number;
  isCustomInputVisible: boolean;
  setCustomInputVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BillTip({
  label,
  values,
  setBtnValue,
  //customValue,
  handleInputChangeInCustom,
  //handleCustomClick,
  inputRef,
  selectedTip,
  isCustomInputVisible,
  setCustomInputVisible,
}: BillTipProps) {
  function handleCustomClick() {
    setCustomInputVisible(true);
    setTimeout(() => {
      inputRef.current && inputRef.current.focus();
    }, 0);
  }

  function handleCustomBlur() {
    if (inputRef.current.value === "") setCustomInputVisible(false);
  }

  return (
    <div className={styles.billContainer}>
      <label className={styles.labelName}>{label}</label>
      <div className={styles.buttonContainer}>
        {values.map((value) =>
          value === "Custom" ? (
            /*<ButtonInput
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
                placeholder="Custom"
                aria-label="Custom tip percentage"
                onChange={handleInputChangeInCustom}
                onBlur={handleBlur}
              />
            </ButtonInput>*/
            isCustomInputVisible ? (
              <input
                ref={inputRef}
                type="text"
                className={styles.inputContainer}
                //placeholder="Custom"
                aria-label="Custom tip percentage"
                onChange={handleInputChangeInCustom}
                onBlur={handleCustomBlur}
              />
            ) : (
              <ButtonInput
                value={value}
                types="custom"
                key={value}
                onClick={handleCustomClick}
                selectedTip={selectedTip}
              ></ButtonInput>
            )
          ) : (
            <ButtonInput
              value={value}
              types="normal"
              onClick={() => {
                setBtnValue(Number(value.slice(0, -1)));
                setCustomInputVisible(false);
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
