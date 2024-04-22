import { useDispatch } from "react-redux";
import AuthForm from "../../components/AuthForm/AthForm";
import { toast } from "react-toastify";
import { registerThunk } from "../../redux/auth/operations";

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    toast.info(`You are registered`);
    console.log(values);
    dispatch(registerThunk(values));
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
