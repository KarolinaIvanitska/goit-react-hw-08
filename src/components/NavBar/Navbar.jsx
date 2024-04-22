import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={css.header}>
      <ul className={css.list}>
        <li>
          <NavLink className={css.item} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.item} to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
      <ul className={css.list}>
        <li>
          <NavLink className={css.item} to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className={css.item} to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
