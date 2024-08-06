export interface State {
  bill: number;
  person: number;
  changed: {
    bill: boolean;
    person: boolean;
  };
  errorObj: {
    bill: {
      error: string;
      hasError: boolean;
    };
    person: {
      error: string;
      hasError: boolean;
    };
  };
  selectedTip: number;
  customValue: string;
}

export type Action =
  | { type: "SET_TIP_VALUE"; payload: number }
  | { type: "SET_BILL_VALUE"; payload: number }
  | { type: "SET_PERSON_VALUE"; payload: number }
  | { type: "MAKE_CHANGE"; field: "bill" | "person"; changed: boolean }
  | {
      type: "SET_ERROR";
      field: "bill" | "person";
      error: string;
      hasError: boolean;
    }
  | { type: "SET_CUSTOM"; customValue: string }
  | { type: "RESET" };
