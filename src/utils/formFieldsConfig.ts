import { FORM_FIELDS } from "../models/Constants/formFields";

type InputType = "text" | "number" | "password" | "email" | "date";
interface IFormField {
  name: string;
  errorName: string;
  type: InputType;
  placeholder: string;
}

export const registerFormFields: IFormField[] = [
  {
    name: FORM_FIELDS.EMAIL,
    errorName: FORM_FIELDS.EMAIL_ERROR,
    type: "email",
    placeholder: "Email",
  },
  {
    name: FORM_FIELDS.PASSWORD,
    errorName: FORM_FIELDS.PASSWORD_ERROR,
    type: "password",
    placeholder: "Password",
  },
  {
    name: FORM_FIELDS.REPEAT_PASSWORD,
    errorName: FORM_FIELDS.REPEAT_PASSWORD_ERROR,
    type: "password",
    placeholder: "Repeat Password",
  },
  {
    name: FORM_FIELDS.FIRSTNAME,
    errorName: FORM_FIELDS.FIRSTNAME_ERROR,
    type: "text",
    placeholder: "First Name",
  },
  {
    name: FORM_FIELDS.LASTNAME,
    errorName: FORM_FIELDS.LASTNAME_ERROR,
    type: "text",
    placeholder: "Last Name",
  },
];
