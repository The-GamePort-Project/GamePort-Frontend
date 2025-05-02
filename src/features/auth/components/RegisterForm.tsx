import Input from "../../../components/inputs/Input/input";

import LargeForm from "../../../components/formLayouts/largeForm/largeForm";
import { ConfirmButton } from "../../../components";
import useFormReducer from "../../../hooks/useFormReducer";
import { FormState } from "../../../hooks/useFormReducer";
import { registerFormFields } from "../../../utils/formFieldsConfig";

interface RegisterFormProps {
  onSubmit: (data: FormState) => void;
  loading?: boolean;
  disabled?: boolean;
}

const RegisterForm = ({ onSubmit, loading, disabled }: RegisterFormProps) => {
  const { setField, setError, state } = useFormReducer({
    password: "",
    repeat_password: "",
    passwordError: null,
    repeat_passwordError: null,
    email: "",
    emailError: null,
    username: "",
    usernameError: null,
    firstname: "",
    firstnameError: null,
    lastname: "",
    lastnameError: null,
    generalError: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("generalError", null);
    setError("emailError", null);
    setError("passwordError", null);
    setError("repeat_passwordError", null);

    if (!state.email) {
      setError("emailError", "Email is required");
      return;
    }

    if (!state.password) {
      setError("passwordError", "Password is required");
      return;
    }

    if (state.password !== state.repeat_password) {
      setError("passwordError", "Passwords do not match");
      setError("repeat_passwordError", "Passwords do not match");
      return;
    }

    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <LargeForm formTitle="Register to GamePort">
        {registerFormFields.map((field) => (
          <Input
            key={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={state[field.name] as string}
            error={state[field.errorName] as string | null}
            onChange={(e) => setField(field.name, e.target.value)}
          />
        ))}
        {state["generalError"] && (
          <p style={{ color: "red" }}>{state["generalError"] as string}</p>
        )}

        <ConfirmButton label="Register" loading={loading} disabled={disabled} />
      </LargeForm>
    </form>
  );
};

export default RegisterForm;
