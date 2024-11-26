import { NavLink } from "react-router-dom";

const navLinks = ["Home", "About", "Shop", "Contact"];

const Nav = () => {
  return (
    <div>
      <ul>
        {navLinks.map((link, index) => {
          return (
            <li key={index}>
              <NavLink to={link === "Home" ? "/" : link.toLowerCase()}>
                {link}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
