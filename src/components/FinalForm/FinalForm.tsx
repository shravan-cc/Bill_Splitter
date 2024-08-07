import React, { useReducer, useRef } from "react";
import styles from "./FinalForm.module.css";
import { FormInput } from "../FormInput/FormInput";
import { Formdisplay } from "../Formdisplay/Formdisplay";

import { reducer, initialState } from "../../reducers/reducer";

export function FinalForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const billTouched = useRef<boolean>(false);

  const error = {
    billErrorMessage: billTouched.current
      ? isNaN(state.bill) || state.bill <= 0
        ? "Please enter valid bill amount"
        : ""
      : "",

    personErrorMessage:
      isNaN(state.person) ||
      state.person <= 0 ||
      !Number.isInteger(state.person)
        ? "Please enter valid number of people"
        : "",
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "SET_BILL_VALUE" | "SET_PERSON_VALUE"
  ) => {
    const newValue = parseFloat(e.target.value);
    if (type === "SET_BILL_VALUE") {
      billTouched.current = true;
    }

    dispatch({ type, payload: Number(newValue) });
  };

  function resetValues() {
    dispatch({ type: "RESET" });
  }

  function handleInputChangeInCustom(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    //setCustom(newValue);
    dispatch({ type: "SET_CUSTOM", customValue: newValue });
    if (!isNaN(parseFloat(newValue))) {
      dispatch({ type: "SET_TIP_VALUE", payload: parseFloat(newValue) });
    } else if (newValue === "") {
      dispatch({ type: "SET_TIP_VALUE", payload: 0 });
    }
  }

  function handleCustomClick() {
    if (state.customValue === "Custom") {
      //setCustom("");
      dispatch({ type: "SET_CUSTOM", customValue: "" });
    }
  }

  function handleBlur() {
    if (state.customValue === "") {
      dispatch({ type: "SET_CUSTOM", customValue: "Custom" });
    }
  }

  const inputRef = useRef<HTMLInputElement>(null);
  function inputFocus() {
    if (inputRef.current) {
      inputRef.current.focus();
      dispatch({ type: "SET_CUSTOM", customValue: "" });
    }
  }

  /*const tipAmount =
    changed.bill && value.person > 0
      ? value.bill > 0
        ? ((value.bill * (btnValue / 100)) / value.person).toFixed(2)
        : "0.00"
      : "0.00";
  const totalAmount =
    changed.bill && value.person > 0
      ? value.bill > 0
        ? ((value.bill * (btnValue / 100) + value.bill) / value.person).toFixed(
            2
          )
        : "0.00"
      : "0.00";*/
  const amount = (isTip: boolean) => {
    return state.person > 0
      ? state.bill > 0
        ? (
            (state.bill * (state.selectedTip / 100) +
              (isTip ? 0 : state.bill)) /
            state.person
          ).toFixed(2)
        : "0.00"
      : "0.00";
  };

  const disabeleButton = state.bill !== 0 || state.person !== 1;
  return (
    <div className={styles.container}>
      <FormInput
        bill={state.bill}
        person={state.person}
        error={error}
        handleChange={handleInputChange}
        setBtnValue={(selectedTip: number) =>
          dispatch({ type: "SET_TIP_VALUE", payload: selectedTip })
        }
        customValue={state.customValue}
        handleInputChangeInCustom={handleInputChangeInCustom}
        handleCustomClick={handleCustomClick}
        handleBlur={handleBlur}
        inputRef={inputRef}
        inputFocus={inputFocus}
        selectedTip={state.selectedTip}
      />
      <Formdisplay
        resetValues={resetValues}
        tipAmount={amount(true)}
        totalAmount={amount(false)}
        disableButton={disabeleButton}
      />
    </div>
  );
}
