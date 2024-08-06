export interface State {
  value: {
    bill: number;
    person: number;
  };
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
  btnValue: number;
  customValue: string;
}

export type Action =
  | { type: "SET_BUTTON"; btnValue: number }
  | { type: "SET_VALUE"; field: "bill" | "person"; value: number }
  | { type: "MAKE_CHANGE"; field: "bill" | "person"; changed: boolean }
  | {
      type: "SET_ERROR";
      field: "bill" | "person";
      error: string;
      hasError: boolean;
    }
  | { type: "SET_CUSTOM"; customValue: string }
  | { type: "RESET" };
