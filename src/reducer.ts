// Manipulation of state
// State must be immutable. This means that whenever we want to change the state
// It must be shallow copy

let state = {
  count: 0,
};

let previousState = state;

// a new state needs to be set

state = { ...state, count: 1 }; //Shallow copy is created of previous state plus some new info

// How cheaply I can identify if the state has changed?

type CountAction =
  | { type: "INC"; payload?: number }
  | { type: "DEC"; payload?: number };
type State = { count: number; step: number };

function counterReducer(state: State, action: CountAction) {
  let newState = { ...state };
  switch (action.type) {
    case "INC": {
      //state.count = state.count + action.payload ?? state.step;
      newState = {
        ...state,
        count: state.count + (action.payload ?? state.step),
      };
      break;
    }
    case "DEC": {
      //state.count = state.count + action.payload ?? state.step;
      newState = {
        ...state,
        count: state.count - (action.payload ?? state.step),
      };
    }
  }
  return newState;
}

function counterStore(
  initialValue: State,
  reducer: (state: State, action: CountAction) => State
) {
  const state = initialValue;

  return {
    getState() {
      return state;
    },

    dispatch(action: CountAction) {
      // action is usually identified with a type filed and there will be an optional payload
      // {type:"increment" | "decrement" | "reset" anything like that,payload:primitive | object}
      reducer(state, action);
    },
  };
}

const counter = counterStore({ count: 0, step: 0 }, counterReducer);
counter.dispatch({ type: "INC", payload: 5 });
counter.dispatch({ type: "DEC", payload: 2 });
counter.getState().count === 3;

function createStore<StateT, ActionT>(
  state: StateT,
  reducer: (state: StateT, action: ActionT) => StateT
) {
  return {
    getState() {
      return state;
    },

    dispatch(action: ActionT) {
      // action is usually identified with a type filed and there will be an optional payload
      // {type:"increment" | "decrement" | "reset" anything like that,payload:primitive | object}
      state = reducer(state, action);
    },
  };
}
