import { useReducer } from "react";
export type FormState = {
  [key: string]: string | number | readonly string[] | undefined | null | Date;
};
type Action =
  | { type: "SET_FIELD"; field: string; value: string }
  | { type: "SET_ERROR"; field: string; error: string | null }
  | { type: "CLEAR_ERROR"; field: string };

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERROR":
      return { ...state, [action.field]: action.error };
    case "CLEAR_ERROR":
      return { ...state, [action.field]: null };
    default:
      return state;
  }
};

const useFormReducer = (initialState: FormState) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const setField = (field: string, value: string) => {
    dispatch({ type: "SET_FIELD", field, value });
    dispatch({ type: "CLEAR_ERROR", field: `error_${field}` });
  };

  const setError = (field: string, error: string | null) => {
    dispatch({ type: "SET_ERROR", field, error });
  };

  return { state, setField, setError };
};
export default useFormReducer;
