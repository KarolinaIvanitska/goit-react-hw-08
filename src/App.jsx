import { useEffect } from "react";
import "./App.css";
import { fetchContacts } from "./redux/contacts/operations";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contacts from "./pages/Contacts/Contacts";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
