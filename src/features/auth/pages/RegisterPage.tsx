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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { repeat_password, ...userInput } = data;
    try {
      await createUser({
        variables: {
          data: {
            ...userInput,
          },
        },
      });

      navigate(pageRoutes.login);
    } catch (error) {
      console.error("Registration error:", error);
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
