import { useEffect } from "react";
import "./App.css";
import { fetchContacts } from "./redux/contacts/operations";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contacts from "./pages/Contacts/Contacts";
import HomePage from "./pages/HomePage/HomePage";

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
      </Routes>
    </>
  );
}

export default App;
