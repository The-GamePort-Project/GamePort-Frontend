import { useState } from "react";
import Input from "../../../components/inputs/Input/input";
import { useNavigate } from "react-router-dom";
import { httpService } from "../../../Services";
import { pageRoutes } from "../../../models/Enums/PageRoutes";
import { AxiosResponse } from "axios";
import { useAuthStore } from "../store/useAuthStore";
import LargeForm from "../../../components/formLayouts/largeForm/largeForm";
import { ConfirmButton } from "../../../components";
import useFormReducer from "../../../hooks/useFormReducer";
import RegisterForm from "../components/RegisterForm";

type InputFieldState = {
  value: string;
  error: string | null;
};

const defaultInputFieldState: InputFieldState = {
  value: "",
  error: null,
};

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (e: React.SyntheticEvent<HTMLFormElement>, data:) => {
    e.preventDefault();
    console.log("Registering...");
  };

  return (
    <>
      <RegisterForm onSubmit={handleRegister} />
    </>
  );
};

export default RegisterPage;
