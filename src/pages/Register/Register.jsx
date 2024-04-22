import AuthForm from "../../components/AuthForm/AthForm";
import { toast } from "react-toastify";

const Register = () => {
  const handleSubmit = () => {
    toast.info(`You are registered`);
  };
  return (
    <div>
      <AuthForm title="Register" onSubmit={handleSubmit} />
    </div>
  );
};
export default Register;
