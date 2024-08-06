import { State, Action } from "../types/types";

export const initialState: State = {
  value: {
    bill: 0,
    person: 1,
  },
  btnValue: 0,
  changed: {
    bill: false,
    person: false,
  },
  errorObj: {
    bill: {
      error: "",
      hasError: false,
    },
    person: {
      error: "",
      hasError: false,
    },
  },
  customValue: "Custom",
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_BUTTON":
      return {
        ...state,
        btnValue: action.btnValue,
      };
    case "SET_VALUE":
      return {
        ...state,
        value: { ...state.value, [action.field]: action.value },
      };
    case "MAKE_CHANGE":
      return {
        ...state,
        changed: { ...state.changed, [action.field]: action.changed },
      };
    case "SET_ERROR":
      return {
        ...state,
        errorObj: {
          ...state.errorObj,
          [action.field]: { error: action.error, hasError: action.hasError },
        },
      };
    case "SET_CUSTOM":
      return {
        ...state,
        customValue: action.customValue,
      };
    case "RESET":
      return initialState;
  }
}
