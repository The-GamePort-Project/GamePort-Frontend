import Input from "../../../components/inputs/Input/input";
import LargeForm from "../../../components/formLayouts/largeForm/largeForm";
import { ConfirmButton } from "../../../components";
import useFormReducer from "../../../hooks/useFormReducer";
import { registerFormFields } from "../../../utils/formFieldsConfig";
import { FORM_FIELDS } from "../../../models/Constants/formFields";
import { IRegisterUserData } from "../models/interfaces";

interface RegisterFormProps {
  onSubmit: (data: IRegisterUserData) => Promise<void>;
  loading?: boolean;
  disabled?: boolean;
}

const RegisterForm = ({ onSubmit, loading, disabled }: RegisterFormProps) => {
  const { setField, setError, state } = useFormReducer({
    password: "",
    repeat_password: "",
    error_password: null,
    error_repeat_password: null,
    email: "",
    error_email: null,
    username: "",
    error_username: null,
    firstname: "",
    error_firstname: null,
    lastname: "",
    error_lastname: null,
    error_general: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let errors = 0;
    setError(FORM_FIELDS.GENERAL_ERROR, null);
    setError(FORM_FIELDS.EMAIL_ERROR, null);
    setError(FORM_FIELDS.PASSWORD_ERROR, null);
    setError(FORM_FIELDS.REPEAT_PASSWORD_ERROR, null);

    if (!state.username) {
      setError(FORM_FIELDS.USERNAME_ERROR, "Username is required");
      errors++;
    }
    if (!state.email) {
      setError(FORM_FIELDS.EMAIL_ERROR, "Email is required");
      errors++;
    }
    if (!state.password) {
      setError(FORM_FIELDS.PASSWORD_ERROR, "Password is required");
      errors++;
    }

    if (state.password !== state.repeat_password) {
      console.log("state.password");
      setError(FORM_FIELDS.PASSWORD_ERROR, "Passwords do not match");
      setError(FORM_FIELDS.REPEAT_PASSWORD_ERROR, "Passwords do not match");
      setTimeout(() => {
        console.log(state[FORM_FIELDS.PASSWORD_ERROR]);
      }, 2000);

      errors++;
    }
    if (errors) {
      return;
    }
    const userData = {} as IRegisterUserData;

    registerFormFields.forEach((field) => {
      const key = field.name as keyof IRegisterUserData;
      if (key in state && state[key]) {
        userData[key] = state[key] as string;
      }
    });

    try {
      await onSubmit(userData as IRegisterUserData);
    } catch {
      setError(
        FORM_FIELDS.GENERAL_ERROR,
        "An error occurred during registration"
      );
    }
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
        {state[FORM_FIELDS.GENERAL_ERROR] && (
          <p style={{ color: "red" }}>
            {state[FORM_FIELDS.GENERAL_ERROR] as string}
          </p>
        )}

        <ConfirmButton label="Register" loading={loading} disabled={disabled} />
      </LargeForm>
    </form>
  );
};

export default RegisterForm;
