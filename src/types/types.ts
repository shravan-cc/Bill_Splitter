export interface State {
  bill: number;
  person: number;
  selectedTip: number;
}

export type Action =
  | { type: "SET_TIP_VALUE"; payload: number }
  | { type: "SET_BILL_VALUE"; payload: number }
  | { type: "SET_PERSON_VALUE"; payload: number }
  | { type: "RESET" };
