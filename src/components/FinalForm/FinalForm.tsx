import React, { useEffect, useReducer, useRef } from "react";
import styles from "./FinalForm.module.css";
import { FormInput } from "../FormInput/FormInput";
import { Formdisplay } from "../Formdisplay/Formdisplay";

import { reducer, initialState } from "../../reducers/reducer";

export function FinalForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  /*const [value, setValue] = useState<{ bill: number; person: number }>({
    bill: 0,
    person: 1,
  });*/

  /*const [changed, makeChange] = useState<{ bill: boolean; person: boolean }>({
    bill: false,
    person: false,
  });*/

  /*const [errorObj, setError] = useState<{
    bill: { error: string; hasError: boolean };
    person: { error: string; hasError: boolean };
  }>({
    bill: { error: "", hasError: false },
    person: { error: "", hasError: false },
  });*/

  //const [btnValue, setBtnValue] = useState<number>(0);

  //const [customValue, setCustom] = useState<string>("Custom");

  useEffect(() => {
    const validateInput = (field: "bill" | "person", value: number) => {
      let hasError = false;
      let errorMessage = "";
      if (state.changed[field]) {
        if (field === "person") {
          if (!Number.isInteger(value)) {
            errorMessage = "Please enter valid number of people";
            hasError = true;
          }
        }
        if (isNaN(Number(value))) {
          errorMessage = "Please enter a number";
          hasError = true;
        } else if (Number(value) <= 0) {
          errorMessage = "Value must be greater than zero";
          hasError = true;
        }
      }
      /*setError((prev) => ({
        ...prev,
        [field]: { error: errorMessage, hasError },
      }));*/
      dispatch({
        type: "SET_ERROR",
        field: field,
        error: errorMessage,
        hasError,
      });
    };

    validateInput("bill", state.value.bill);
    validateInput("person", state.value.person);
  }, [state.value, state.changed]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "bill" | "person"
  ) => {
    const newValue = parseFloat(e.target.value);

    /*setValue((prev) => ({
      ...prev,
      [field]: Number(newValue),
    }));*/
    dispatch({ type: "SET_VALUE", field: field, value: Number(newValue) });

    // makeChange((prev) => ({
    //   ...prev,
    //   [field]: true,
    // }));
    dispatch({ type: "MAKE_CHANGE", field: field, changed: true });
  };

  function resetValues() {
    /*setValue({ bill: 0, person: 1 });*/

    // makeChange((prev) => ({
    //   ...prev,
    //   ["bill"]: false,
    // }));

    // makeChange((prev) => ({
    //   ...prev,
    //   ["person"]: false,
    // }));

    dispatch({ type: "RESET" });
  }

  function handleInputChangeInCustom(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    //setCustom(newValue);
    dispatch({ type: "SET_CUSTOM", customValue: newValue });
    if (!isNaN(parseFloat(newValue))) {
      dispatch({ type: "SET_BUTTON", btnValue: parseFloat(newValue) });
    } else if (newValue === "") {
      dispatch({ type: "SET_BUTTON", btnValue: 0 });
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
    return state.changed.bill && state.value.person > 0
      ? state.value.bill > 0
        ? (
            (state.value.bill * (state.btnValue / 100) +
              (isTip ? 0 : state.value.bill)) /
            state.value.person
          ).toFixed(2)
        : "0.00"
      : "0.00";
  };

  const disabeleButton = state.changed.bill || state.changed.person;
  return (
    <div className={styles.container}>
      <FormInput
        value={state.value}
        error={state.errorObj}
        handleChange={handleInputChange}
        setBtnValue={(btnValue: number) =>
          dispatch({ type: "SET_BUTTON", btnValue })
        }
        customValue={state.customValue}
        handleInputChangeInCustom={handleInputChangeInCustom}
        handleCustomClick={handleCustomClick}
        handleBlur={handleBlur}
        inputRef={inputRef}
        inputFocus={inputFocus}
        btnValue={state.btnValue}
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
