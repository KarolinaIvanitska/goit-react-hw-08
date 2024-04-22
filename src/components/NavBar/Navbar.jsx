import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={css.NavBar}>
      <div className={css.header}>
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
      </div>
    </div>
  );
};

export default NavBar;
