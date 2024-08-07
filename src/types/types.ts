export interface State {
  bill: number;
  person: number;
  selectedTip: number;
  customValue: string;
}

export type Action =
  | { type: "SET_TIP_VALUE"; payload: number }
  | { type: "SET_BILL_VALUE"; payload: number }
  | { type: "SET_PERSON_VALUE"; payload: number }
  | { type: "SET_CUSTOM"; customValue: string }
  | { type: "RESET" };
