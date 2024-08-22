import React, { useReducer, useRef, useState } from "react";
// import styles from "./FinalForm.module.css";
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

  const [isCustomInputVisible, setCustomInputVisible] =
    useState<boolean>(false);

  function resetValues() {
    dispatch({ type: "RESET" });
    billTouched.current = false;
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setCustomInputVisible(false);
  }

  function handleInputChangeInCustom(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    if (!isNaN(parseFloat(newValue))) {
      dispatch({ type: "SET_TIP_VALUE", payload: parseFloat(newValue) });
    } else if (newValue === "") {
      dispatch({ type: "SET_TIP_VALUE", payload: 0 });
    }
  }

  const inputRef = useRef<HTMLInputElement>(null);

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

  const disabeleButton =
    state.bill !== 0 || state.person !== 1 || state.selectedTip !== 0;
  return (
    <div className="grid grid-cols-2 gap-[4.125vw] w-full border-box sm-max:flex sm-max:flex-col sm-max:w-full sm-max:gap-[2rem]">
      <FormInput
        bill={state.bill}
        person={state.person}
        error={error}
        handleChange={handleInputChange}
        setBtnValue={(selectedTip: number) =>
          dispatch({ type: "SET_TIP_VALUE", payload: selectedTip })
        }
        handleInputChangeInCustom={handleInputChangeInCustom}
        inputRef={inputRef}
        selectedTip={state.selectedTip}
        isCustomInputVisible={isCustomInputVisible}
        setCustomInputVisible={setCustomInputVisible}
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
