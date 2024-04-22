import AuthForm from "../../components/AuthForm/AthForm";
import { toast } from "react-toastify";

const Login = () => {
  const handleSubmit = () => {
    toast.success(`You are logged in!`);
  };
  return (
    <div>
      <AuthForm title="Login" onSubmit={handleSubmit} />
    </div>
  );
};
export default Login;
