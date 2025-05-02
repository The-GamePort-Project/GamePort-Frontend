import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { useMutation } from "@apollo/client";
import { IRegisterUserData } from "../models/interfaces";
import { gqlService } from "../../../Services";
import { pageRoutes } from "../../../models/Enums/PageRoutes";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [createUser, { loading }] = useMutation(
    gqlService.mutation.CREATE_USER
  );

  const handleRegister = async (data: IRegisterUserData) => {
    console.log("Registering user with data:", data);
    try {
      const response = await createUser({
        variables: {
          ...data,
        },
      });
      console.log("User registered successfully:", response.data);
      navigate(pageRoutes.login);
    } catch (error) {
      console.error("Registration error:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      <div className="w-md">
        <RegisterForm onSubmit={handleRegister} loading={loading} />
      </div>
    </>
  );
};

export default RegisterPage;
