import AuthForm from "../../components/AuthForm/AthForm";
import { toast } from "react-toastify";

const Register = () => {
  const handleSubmit = (values) => {
    toast.info(`You are registered`);
    console.log(values);
  };
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <AuthForm
      title="Register"
      onSubmit={handleSubmit}
      initialValues={initialValues}
      type="register"
    />
  );
};
export default Register;
