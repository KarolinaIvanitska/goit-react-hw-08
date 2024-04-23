import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contacts from "./pages/Contacts/Contacts";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { refreshThunk } from "./redux/auth/operations";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute";
import PublicRoutes from "./routes/PublicRoutes/PublicRoutes";
import { selectIsRefresh } from "./redux/auth/slice";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="register" element={<Register />} />
        <Route
          path="login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
      </Routes>
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
