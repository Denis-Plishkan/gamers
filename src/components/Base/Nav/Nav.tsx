import { NavLink } from "react-router-dom";
import Typography from '@mui/material/Typography';

interface NavProps {
  navLinks: { name: string; path: string }[];
}

const Nav: React.FC<NavProps> = ({ navLinks }) => {
  return (
    <div className="nav">
      <ul>
        {navLinks.map((link) => (
          <li key={link.path}>
            <Typography>
              <NavLink to={link.path}>{link.name}</NavLink>
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;


