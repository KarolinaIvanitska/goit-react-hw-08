import AuthForm from "../../components/AuthForm/AthForm";
import { toast } from "react-toastify";

const Login = () => {
  const handleSubmit = (values) => {
    toast.success(`You are logged in!`);
    console.log(values);
  };
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <AuthForm
      title="Login"
      onSubmit={handleSubmit}
      initialValues={initialValues}
    />
  );
};
export default Login;
