import { State, Action } from "../types/types";

export const initialState: State = {
  bill: 0,
  person: 1,
  selectedTip: 0,
  customValue: "Custom",
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_TIP_VALUE":
      return {
        ...state,
        selectedTip: action.payload,
      };
    case "SET_BILL_VALUE":
      return {
        ...state,
        bill: action.payload,
      };
    case "SET_PERSON_VALUE":
      return {
        ...state,
        person: action.payload,
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
