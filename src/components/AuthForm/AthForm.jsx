import { Formik, Form, Field } from "formik";
import css from "./AuthForm.module.css";

const AuthForm = ({ title, onSubmit, initialValues }) => {
  return (
    <div>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <Field
            className={css.input}
            type="text"
            name="email"
            placeholder="Email"
          />
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit">{title}</button>
        </Form>
      </Formik>
    </div>
  );
};
export default AuthForm;
